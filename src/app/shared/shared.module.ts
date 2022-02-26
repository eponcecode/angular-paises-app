import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SlidebarComponent
  ],
  exports: [
    SlidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
