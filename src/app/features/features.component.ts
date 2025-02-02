import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
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
