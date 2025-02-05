import { Component, OnInit } from '@angular/core';
import SETUP_ITEMS from './setup';

@Component({
  selector: 'app-setups',
  templateUrl: './setups.component.html',
  styleUrls: ['./setups.component.scss']
})
export class SetupsComponent implements OnInit {
  setupItems = SETUP_ITEMS;
  constructor() { }

  ngOnInit(): void {
  }

}

