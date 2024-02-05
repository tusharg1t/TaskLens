import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'TaskLens';
  isLoggedIn : any = "";
  redirectTo: string = "";
  ngOnInit(): void {
    let isValid = this.checkSessionToken(this.isLoggedIn);

    if(isValid)
      this.redirectTo="dashboard";
    else
      this.redirectTo="login";
  }

  checkSessionToken(token : any){
    if(token == null || token.length < 1 || token == undefined)
      return false;
    else{
      return this.isTokenValid(token);
    }
  }

  isTokenValid(token : any){
    this.isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if(this.isLoggedIn)
      return true;
    else
      return false;
  }
}
