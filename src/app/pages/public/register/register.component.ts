import { AuthService } from '../../../core/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  forms: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}
  register() {
    if (this.forms.valid) {
      const registrationSuccess = this.authService.register({
        username: this.forms.value.username,
        password: this.forms.value.password,
        email: this.forms.value.email,
      });

      if (registrationSuccess) {
        console.log('Registration successful!', this.forms.value);
      } else {
        this.forms.setErrors({ registrationError: true });
        console.log('Username already exists. Please choose a different one.');
      }
    } else {
      this.forms.setErrors({ invalidForm: true });
      console.log('Invalid form. Please check your inputs.');
    }
  }
  navigateToLogin() {
    this.router.navigateByUrl('/login');
  }
}
