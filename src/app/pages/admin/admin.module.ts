import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent, UsersPageComponent],
  imports: [CommonModule, AdminRoutingModule, FormsModule],
  
})
export class AdminModule {}
