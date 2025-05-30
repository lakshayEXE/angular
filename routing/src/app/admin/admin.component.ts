import { Component } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-admin',
  imports: [EmployeeComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
