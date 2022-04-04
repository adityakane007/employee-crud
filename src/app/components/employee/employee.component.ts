import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeData: Employee[] = [];

  constructor(private employeeServ: EmployeeService) { }

  ngOnInit(): void {
    this.employeeServ.getAllEmployees().subscribe((data: Employee[]) => {
      this.employeeData = data;
    }, error => console.error(error))
  }

  deleteemployee(id: any) {
    if (confirm("Do u want to Delete Employee?")) {
      this.employeeServ.deleteEmployee(id)
        .subscribe(res => {
          if (res) {
            alert("Employee Deleted")
            this.employeeServ.getAllEmployees()
              .subscribe((data: Employee[]) => {
                this.employeeData = data;
              })
          }
        })
    }

  }

}
