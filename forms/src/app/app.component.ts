import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  //properties 
  name = new FormControl();
  password = new FormControl();

  displayValue(){
    console.log("Name:", this.name.value , "Password:" ,this.password.value);
  }
}