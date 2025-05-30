import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { v4 as uuid } from 'uuid'; 
interface Task{
  id:string;
  title :string;
  priority :'High'|'Medium' |'Low';
  description :string;
}


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  editingTaskId: string | null = null;
  editForm: Partial<Task> = {};

  // form model for new task
  newTask: Partial<Task> = {
    title: '',
    priority: undefined,
    description: ''
  };

  ngOnInit() {
    this.loadTasks();
  }

  private persist() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadTasks() {
    const stored = localStorage.getItem('tasks');
    this.tasks = stored ? JSON.parse(stored) : [];
  }

  addTask() {
    if (!this.newTask.title || !this.newTask.priority) return;
    const task: Task = {
      id: nextId,
      title: this.newTask.title,
      priority: this.newTask.priority as 'High' | 'Medium' |'Low',
      description: this.newTask.description || ''
    };
    this.tasks.push(task);
    this.persist();
    this.newTask = { title: '', priority: undefined, description: '' };
  }

  deleteTask(id: string) {
    if (!confirm('Delete this task?')) return;
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.persist();
  }

  startEdit(task: Task) {
   if (this.editingTaskId === null) return;
    const idx = this.tasks.findIndex(t => t.id === this.editingTaskId);
    if (idx > -1 && this.editForm.title && this.editForm.priority) {
      this.tasks[idx] = {
        id: this.editingTaskId,
        title: this.editForm.title,
        priority: this.editForm.priority as 'High' | 'Medium' | 'Low',
        description: this.editForm.description || ''
      };
      this.persist();
    }
    this.cancelEdit();
  }

  saveEdit() {
    if (!this.editingTaskId) return;
    const idx = this.tasks.findIndex(t => t.id === this.editingTaskId);
    if (idx > -1 && this.editForm.title && this.editForm.priority) {
      this.tasks[idx] = {
        id: this.editingTaskId,
        title: this.editForm.title,
        priority: this.editForm.priority as any,
        description: this.editForm.description || ''
      };
      this.persist();
    }
    this.cancelEdit();
  }
  cancelEdit() {
    this.editingTaskId = null;
    this.editForm = {};
  }
}