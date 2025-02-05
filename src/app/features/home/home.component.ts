import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userData: any;
  loggedInUserName: string = "Dr. Admin";
  hour = new Date().getHours();
  greeting = "Good Morning";
  currentTime: string = "";
  constructor(
  ) { }

  ngOnInit(): void {
    this.greeting = "Good " + (this.hour < 12 && "Morning" || this.hour < 15 && "Afternoon" || "Evening");
  }

}
