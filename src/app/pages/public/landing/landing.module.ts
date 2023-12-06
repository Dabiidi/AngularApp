import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LadingComponent } from './lading.component';
import { RouterModule } from '@angular/router';

  @NgModule({
    declarations: [LadingComponent],
    exports: [LadingComponent],
    imports: [CommonModule, RouterModule],
  })
  export class LandingModule {}
