import { Component } from '@angular/core';
import { FormControl,FormGroup, ReactiveFormsModule , Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
    addTask(){
      console.log("working");
    }

    // task = new FormControl();
    // name = new FormControl();
    // Priority = new FormControl();
    // description = new FormControl();

    taskForm = new FormGroup({
      task: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      priority : new FormControl('', Validators.required),
      description: new FormControl('')
    });
    onSubmit(){
      if(this.taskForm.valid){
        const existingTasks = JSON.parse(localStorage.getItem('task') || '[]');
        const newTask = {id: Date.now().toString(), ...this.taskForm.value};
        existingTasks.push(newTask);
        localStorage.setItem('tasks' , JSON.stringify(existingTasks));
        
      }
    }


}
