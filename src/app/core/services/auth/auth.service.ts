import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: any[] = [];
  session: any;

  constructor(private router: Router) {
    let storedUsers: any = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }

    let session: any = localStorage.getItem('session');
    if (session) {
      this.session = JSON.parse(session);
      this.loadUserTodoList();
    }
  }

  login(username: string, password: string) {
    let user = this.users.find(
      (u) => u.username === username && u.password === password
    );

    if (
      !user &&
      this.session &&
      this.session.username === username &&
      this.session.password === password
    ) {
      user = this.session;
    }

    if (user) {
      this.session = user;
      this.loadUserTodoList();
      localStorage.setItem('session', JSON.stringify(this.session));
    }

    return user;
  }

  register(user: { email: string; username: string; password: string }) {
    if (this.users.some((u) => u.username === user.username)) {
      return false;
    }

    const newUser = {
      id: this.users.length + 1,
      ...user,
      todos: [],
    };

    this.users.push(newUser);

    localStorage.setItem('users', JSON.stringify(this.users));

    this.session = newUser;
    this.saveUserTodoList();
    localStorage.setItem('session', JSON.stringify(this.session));

    return true;
  }

  private loadUserTodoList() {
    if (this.session && this.session.todos) {
      this.session.todos = JSON.parse(
        localStorage.getItem('userTodoList_' + this.session.id) || '[]'
      );
    }
  }

  private saveUserTodoList() {
    if (this.session) {
      localStorage.setItem(
        'userTodoList_' + this.session.id,
        JSON.stringify(this.session.todos || [])
      );
    }
  }

  getUserName(): string {
    return this.session ? this.session.username : '';
  }
  getUserId(): number | null {
    return this.session ? this.session.id : null;
  }

  logout() {
    this.saveUserTodoList();
    localStorage.removeItem('session');
    this.router.navigateByUrl('/');
  }

  getTodoList(): any[] {
    return this.session ? this.session.todos : [];
  }

  addTodo(newTodo: string) {
    if (this.session && newTodo.trim() !== '') {
      const todo = {
        text: newTodo,
        editing: false,
        createdAt: new Date(),
        completed: false,
      };
      this.session.todos.push(todo);
      this.saveUserTodoList();
    }
  }

  editTodo(index: number) {
    if (this.session) {
      this.session.todos[index].editing = true;
    }
  }

  saveEdit(index: number) {
    if (this.session) {
      this.session.todos[index].editing = false;
      this.saveUserTodoList();
    }
  }

  deleteTodo(index: number) {
    if (this.session) {
      this.session.todos.splice(index, 1);
      this.saveUserTodoList();
    }
  }
  completeTodo(index: number, completed: boolean = true) {
    if (this.session && this.session.todos[index]) {
      this.session.todos[index].completed = completed;
      this.saveUserTodoList();
    }
  }
}
