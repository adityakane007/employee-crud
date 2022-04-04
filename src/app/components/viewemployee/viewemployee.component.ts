import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  id!: number;
  name!: string;
  address!: string;
  email!: string;
  mobile!: string;

  constructor(private aroute: ActivatedRoute, private employeeServ: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.aroute.snapshot.params['id'];
    this.employeeServ.getEmployeeById(this.id)
      .subscribe(res => {
        this.name = res.name;
        this.address = res.address;
        this.email = res.email;
        this.mobile = res.mobile;
      })
  }

}
