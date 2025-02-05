import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  isSidenavOpened = false;
  userName: string = "Admin";
  currentTime: string = "";

  constructor(private router: Router) { }
  ngAfterViewInit() {
    this.sidenav.openedChange.subscribe((opened) => {
      this.isSidenavOpened = opened;
    });
  }
  ngOnInit(): void {
    setInterval(() => {
      const currentDate = new Date();
      this.currentTime = currentDate.toLocaleTimeString();
    }, 1000);
  }
  onForgotPassword() {
    console.log('Forgot Password clicked');
    // Navigate to Forgot Password page or open a modal
  }

  onLogout() {
    console.log('Logout clicked');
    this.router.navigate(['../']);
  }
}
