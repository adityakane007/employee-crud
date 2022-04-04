import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

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

  editEmployee() {
    let formData = {
      name: this.name, address: this.address, email: this.email,
      mobile: this.mobile
    }
    this.employeeServ.updateEmployee(this.id, formData)
      .subscribe(res => {
        if (res) {
          alert("Employee Updated Successfully");
          this.router.navigate(["/employee"]);
        }
      })
  }

}
