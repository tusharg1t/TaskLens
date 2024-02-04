import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username: string = '';
  password: string = '';

  login(): void {
    sessionStorage.setItem("isLoggedIn","true");
  }

  signIn():void{
    alert();
  }

}
