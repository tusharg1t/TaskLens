import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDashboardComponent } from './task-dashboard/task-dashboard.component';



@NgModule({
  declarations: [
    TaskDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[TaskDashboardComponent]
})
export class DashboardModule { }
