import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isLabExpanded = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLab() {
    this.isLabExpanded = !this.isLabExpanded;
  }

}
