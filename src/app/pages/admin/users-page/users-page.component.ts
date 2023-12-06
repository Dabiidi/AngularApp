import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
})
export class UsersPageComponent {
  todos: { text: string; editing: boolean }[] = [];
  newTodo: string = '';

  constructor(private authService: AuthService) {}
  logout() {
    this.authService.logout();
  }
  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({ text: this.newTodo, editing: false });
      this.newTodo = '';
    }
  }

  editTodo(index: number) {
    this.todos[index].editing = true;
  }

  saveEdit(index: number) {
    this.todos[index].editing = false;
  }

  deleteTodo(index: number) {
    const confirmDelete = confirm('Are you sure you want to delete this todo?');
    if (confirmDelete) {
      this.todos.splice(index, 1);
    }
  }
  
}
