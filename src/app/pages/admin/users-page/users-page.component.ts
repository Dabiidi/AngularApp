import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
})
export class UsersPageComponent {
  constructor(private authService: AuthService) {}
  logout() {
    this.authService.logout();
  }
}
