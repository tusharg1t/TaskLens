import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RecoverUsernameComponent } from './recover-username/recover-username.component';



@NgModule({
  declarations: [
    RecoverPasswordComponent,
    RecoverUsernameComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecoveryModule { }
