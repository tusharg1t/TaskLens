import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'TaskLens';
  isLoggedIn : any = "";
  ngOnInit(): void {
    this.isLoggedIn = sessionStorage.getItem("isLoggedIn");
  }
}
