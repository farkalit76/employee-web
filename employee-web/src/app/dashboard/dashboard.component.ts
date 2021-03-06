import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  /*
  * Retrieve only 2 to 5
  */
  getEmployees(): void {
    this.empService.getEmployees()
      .subscribe(employees => this.employees = employees.slice(1, 5));
  }

}
