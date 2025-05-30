import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  task: string = '';
  taskList: { id: number; task: string }[] = [];

  addTask() {
    const trimmedTask = this.task.trim();
    if (trimmedTask) {
      this.taskList.push({ id: this.taskList.length + 1, task: trimmedTask });
      this.task = '';
    }
  }

  deleteTask(taskId: number) {
    this.taskList = this.taskList.filter(item => item.id !== taskId);
  }

  trackById(index: number, item: { id: number }) {
    return item.id;
  }
}
