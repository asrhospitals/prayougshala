import { Component, OnInit } from '@angular/core';
import { ROLE_CONFIG } from 'src/app/auth/auth.util';
import SETUP_ITEMS from './setup';

@Component({
  selector: 'app-setups',
  templateUrl: './setups.component.html',
  styleUrls: ['./setups.component.scss']
})

export class SetupsComponent implements OnInit {
  setupItems: any[] = [];
  constructor() { }

  ngOnInit(): void {
    const userRole = localStorage.getItem('userRole');
    this.setupItems = this.getFilteredMenu(userRole);
  }

  getFilteredMenu(role: string | null): any[] {
    if (!role) return [];
    console.log(ROLE_CONFIG[role]);
    return SETUP_ITEMS
      .filter(item => ROLE_CONFIG[role]?.includes(item.key));
  }
}
