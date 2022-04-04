import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  name!: string;
  address!: string;
  email!: string;
  mobile!: string;

  constructor(private employeeServ: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  addEmployee() {
    let employeeData = {
      name: this.name, address: this.address, email: this.email,
      mobile: this.mobile
    }
    this.employeeServ.addEmployee(employeeData).subscribe(res => {
      alert("Employee Added Successfully");
      this.router.navigate(['/employee']);
    })
  }

}
