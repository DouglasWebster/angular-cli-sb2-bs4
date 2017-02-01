import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public sidebarCollapsed: boolean = true;
  public subMenu1Collapsed: boolean = true;

  // showMenu: string = '';

  constructor() { }

  ngOnInit() {
  }

  eventCalled() {
  }

  // addExpandClass(element: any) {
  //   if (element === this.showMenu) {
  //     this.showMenu = '0';
  //   } else {
  //     this.showMenu = element;
  //   }
  // }
}
