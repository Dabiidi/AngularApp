import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).session) return true;
  inject(Router).navigateByUrl('/');
  return false;
};
