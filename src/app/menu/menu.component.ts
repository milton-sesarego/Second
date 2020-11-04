import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public isCollapsed = true;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
