import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {  
  private apiURL = "http://127.0.0.1:8000/api/employees/";  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<any> {
    return this.http.get(this.apiURL);
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}${id}`);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.apiURL}${id}`);
  }

  addEmployee(data: Employee): Observable<any> {
    return this.http.post(this.apiURL, JSON.stringify(data), this.httpOptions);
  }

  updateEmployee(id: number, data: Employee): Observable<any> {
    return this.http.put(`${this.apiURL}${id}`, JSON.stringify(data), this.httpOptions)
  }

}
