import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';
import { EMPLOYEES } from '../mock-employee';

import { EmployeeService } from '../employee.service';

import { MessageService } from '../message.service';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private empService: EmployeeService, private messageService: MessageService) {}

  //employee = 'Usmani';
  // employee: Employee = {
  //   id: 1,
  //   name: 'Usmani'
  // };

  //employees = EMPLOYEES;

  employees: Employee[];

  ngOnInit(): void {
    this.getEmployees();
  }

  // getEmployees(): void {
  //   this.employees = this.empService.getEmployees();
  // }

  getEmployees(): void {
    console.log('getEmployees');
    this.empService.getEmployees()
        .subscribe(emps => this.employees = emps);
  }

  selectedEmp: Employee;
  onSelect(emp: Employee): void {

    this.selectedEmp = emp;
    console.log('onSelect:'+this.selectedEmp);
    this.messageService.add(`EmployeeComponent: Selected emp id=${emp.empId}`);
  }

 
}
