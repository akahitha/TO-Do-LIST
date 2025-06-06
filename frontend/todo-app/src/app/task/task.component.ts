// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-task',
//   templateUrl: './task.component.html',
//   styleUrls: ['./task.component.css']
// })
// export class TaskComponent {

// }
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  newTodo: string = '';  // Store new task input
  tasks: Task[] = [];    // Store tasks

  constructor(private taskService: TaskService) {} // Inject TaskService

  ngOnInit() {
    this.loadTasks(); // Fetch tasks when component loads
  }

  // Fetch all tasks from backend
  loadTasks() {
    this.taskService.getTasks().subscribe(
      (data) => this.tasks = data,
      (error) => console.error("Error fetching tasks:", error)
    );
  }

  // Add new task
  addTask(): void {
    console.log("Add button clicked:", this.newTodo); // Debug log

    if (!this.newTodo.trim()) {
      console.error("Task cannot be empty");
      return;
    }

    const task: Task = {
      title: this.newTodo.trim(),
      completed: false
    };

    this.taskService.addTask(task).subscribe(
      (response: Task) => {
        console.log("Task added successfully:", response);
        this.tasks.push(response);    // Add to task list
        this.newTodo = '';            // Clear input
      },
      (error) => console.error("Error adding task:", error)
    );
  }
  // Toggle task completion
  toggleCompletion(task: Task) {
    task.completed = !task.completed;
    this.taskService.updateTask(task).subscribe(
      () => console.log("Task updated"),
      (error) => console.error("Error updating task:", error)
    );
  }

  // Delete task (Fix: Ensure ID is present before calling)
  deleteTask(id?: number) {
    if (id === undefined) {
      console.error("Task ID is undefined, cannot delete");
      return;
    }

    this.taskService.deleteTask(id).subscribe(
      () => this.tasks = this.tasks.filter(task => task.id !== id),
      (error) => console.error("Error deleting task:", error)
    );
  }
}
