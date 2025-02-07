import { Component, OnInit } from '@angular/core';
import { ROLE_CONFIG } from 'src/app/auth/auth.util';
import MENU_ITEMS from 'src/app/menu';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  menuItems: any[] = [];
  expandedMenus: { [key: string]: boolean } = {};

  constructor() { }

  ngOnInit(): void {
    const userRole = localStorage.getItem('userRole');
    this.menuItems = this.getFilteredMenu(userRole);

    this.menuItems.forEach(item => {
      if (item.children) {
        this.expandedMenus[item.name] = true;
      }
    });
  }

  toggleMenu(name: string): void {
    this.expandedMenus[name] = !this.expandedMenus[name];
  }

  getFilteredMenu(role: string | null): any[] {
    if (!role) return [];

    return MENU_ITEMS
  .filter(item => ROLE_CONFIG[role]?.includes(item.key))
  .map(item => {
    const filteredChildren = item.children?.filter(child => ROLE_CONFIG[role]?.includes(child.key));

    return {
      ...item,
      ...(filteredChildren?.length ? { children: filteredChildren } : {}) // Only include children if they exist
    };
  });

  }
}
