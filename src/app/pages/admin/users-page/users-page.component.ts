import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { TodoListService } from '../../../core/services/auth/todolist.service'; // Update the path

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent {
  newTodo: string = '';
  createdAt: Date = new Date();

  constructor(
    private authService: AuthService,
    private todoService: TodoListService
  ) {}

  get UserName() {
    return this.authService.getUserName();
  }

  get todos() {
    return this.todoService.todos;
  }

  logout() {
    this.authService.logout();
  }

  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = '';
  }

  editTodo(index: number) {
    this.todoService.editTodo(index);
  }

  saveEdit(index: number) {
    this.todoService.saveEdit(index);
  }

  deleteTodo(index: number) {
    this.todoService.deleteTodo(index);
  }
  get filteredTodos() {
    return this.todoService.getFilteredTodos();
  }
  showOngoingTasks() {
    this.todoService.showOngoingTasks();
  }

  showFinishedTasks() {
    this.todoService.showFinishedTasks();
  }
  completeTodo(index: number, completed: boolean = true) {
    this.authService.completeTodo(index, completed);
  }
}
