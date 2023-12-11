import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service'; // Update the path

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor(private authService: AuthService) {}

  private currentFilter: 'all' | 'ongoing' | 'finished' = 'ongoing';

  get todos() {
    const userId = this.authService.getUserId();
    return userId ? this.authService.getTodoList() : [];
  }

  showOngoingTasks() {
    this.currentFilter = 'ongoing';
  }

  showFinishedTasks() {
    this.currentFilter = 'finished';
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
  getFilteredTodos() {
    const allTodos = this.authService.getTodoList();
    if (this.currentFilter === 'ongoing') {
      return allTodos.filter((todo) => !todo.completed);
    } else if (this.currentFilter === 'finished') {
      return allTodos.filter((todo) => todo.completed);
    } else {
      return allTodos;
    }
  }
  completeTodo(index: number) {
    const userId = this.authService.getUserId();
    if (userId) {
      this.authService.completeTodo(index);
    }
  }
}
