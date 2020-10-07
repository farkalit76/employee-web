import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Employee } from './employee';
import { EMPLOYEES } from './mock-employee';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // URL to web api
  private employeeUrl = 'http://localhost:8081/api/employees';


  constructor(private http: HttpClient, private messageService: MessageService) { }

  // getEmployees(): Observable<Employee[]> {
  //   // TODO: send the message _after_ fetching the employees
  //   this.messageService.add('EmpService: fetched employees');
  //   return of(EMPLOYEES);
  // }

  getEmployees(): Observable<Employee[]> {
    console.log('calling rest api for http://localhost:8081');
    return this.http.get<Employee[]>(this.employeeUrl)
  }

  // getEmployee(id: number): Observable<Employee> {
  //   // TODO: send the message _after_ fetching the employee
  //   this.messageService.add(`EmployeeService: fetched emp id=${id}`);
  //   return of(EMPLOYEES.find(emp => emp.id === id));
  // }

  getEmployee(empId: number): Observable<Employee> {
    //return of(EMPLOYEES.find(emp => emp.id === id));
    console.log('calling rest api for empId:'+empId);
    return this.http.get<Employee>(this.employeeUrl+'/'+empId)
  }
}
