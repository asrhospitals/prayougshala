import { Component, OnInit } from '@angular/core';
import MENU_ITEMS from 'src/app/menu';

interface MenuItem {
  name: string;
  link?: string;
  icon: string;
  visible: boolean;
  children?: MenuItem[];
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  menuItems: MenuItem[] = MENU_ITEMS;
  expandedMenus: { [key: string]: boolean } = {};

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(name: string): void {
    this.expandedMenus[name] = !this.expandedMenus[name];
  }

}

