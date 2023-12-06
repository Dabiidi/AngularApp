import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/public/login/login.component';
import { authGuard } from './core/services/guard/auth.guard';
import { RegisterComponent } from './pages/public/register/register.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
      canActivate:[authGuard]
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
