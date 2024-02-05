import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterationComponent } from './registeration/registeration.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[LoginComponent, RegisterationComponent]
})
export class AuthenticationModule { }
