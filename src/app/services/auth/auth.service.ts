import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: any[] = [];
  session: any;
  constructor(private router: Router) {
    let storedUsers: any = localStorage.getItem('session');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
    console.log('users', storedUsers);
    let session: any = localStorage.getItem('session');
    if (session) {
      this.session = JSON.parse(session);
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
      localStorage.setItem('session', JSON.stringify(this.session));
    }

    return user;
  }
  register(user: {
    email: string;

    username: string;
    password: string;
  }) {
    if (this.users.some((u) => u.username === user.username)) {
      return false;
    }

    const newUser = {
      id: this.users.length + 1,
      ...user,
    };
    this.users.push(newUser);

    this.session = newUser;
    localStorage.setItem('session', JSON.stringify(this.session));

    return true;
  }

  logout() {
    // localStorage.removeItem('session');
    this.router.navigateByUrl('/');
  }
}
