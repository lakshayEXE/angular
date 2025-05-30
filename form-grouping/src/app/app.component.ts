import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl,FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  formcontainer = new FormGroup({
    name : new FormControl('',[Validators.required,Validators.minLength(3)]),
    password :new FormControl('',[Validators.required,Validators.minLength(5)]),
    email : new FormControl('',[Validators.required,Validators.minLength(5)]),
    age : new FormControl('',[Validators.required, Validators.min(18)])
})
onSubmit(){
  console.log(this.formcontainer.value); 
}

get name(){
  return this.formcontainer.get('name');
}
get email(){
   return this.formcontainer.get("email");
}
get password(){
    return this.formcontainer.get("password");
}
}
