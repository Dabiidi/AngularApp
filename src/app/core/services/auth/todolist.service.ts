import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service'; // Update the path

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor(private authService: AuthService) {}

  get todos() {
    const userId = this.authService.getUserId();
    return userId ? this.authService.getTodoList() : [];
  }

  addTodo(newTodo: string) {
    const userId = this.authService.getUserId();
    if (userId && newTodo.trim() !== '') {
      this.authService.addTodo(newTodo);
    }
  }

  editTodo(index: number) {
    const userId = this.authService.getUserId();
    if (userId) {
      this.authService.editTodo(index);
    }
  }

  saveEdit(index: number) {
    const userId = this.authService.getUserId();
    if (userId) {
      this.authService.saveEdit(index);
    }
  }

  deleteTodo(index: number) {
    const userId = this.authService.getUserId();
    if (userId) {
      this.authService.deleteTodo(index);
    }
  }
}
