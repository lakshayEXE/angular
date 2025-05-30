import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksComponent } from './tasks/tasks.component';

export const routes: Routes = [
    { path:'Home' , component : HomeComponent},
    { path:'addTask' , component : AddTaskComponent},
    { path:'YourTask' , component : TasksComponent}];
