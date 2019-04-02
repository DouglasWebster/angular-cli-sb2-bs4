import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public sidebarCollapsed = true;
  public subMenu1Collapsed = true;
  public errorMessage: string;

  public subMenuGlyphUp = 'fa fa-caret-left';
  public subMenuGlyphDown = 'fa fa-caret-down';

  public menuList: object[] = [];

  public remoteMenuList: object[] = [];

  public hardCodedItems: object[] = [
    { name: 'Blank Page', link: 'home', glyph: 'fa fa-fw fa-file-o', children: [], collapse: false },
    {
      name: 'Dummy Menu', link: 'home', glyph: 'fa fa-fw fa-file-o', children: [
        { name: 'Dummy 1', link: '', glyph: 'fa fa-fw fa-dashboard' },
        { name: 'Dummy 2', link: '', glyph: 'fa fa-fw fa-dashboard' }
      ], collapse: true
    }
  ];

  constructor(private menuService: SidebarService) { }

  ngOnInit() {
    // console.log('Sidebar component initiating');
    this.setDefaultMenu();
    this.getMenu();
  }

  getMenu(url?) {
    this.menuService.getMenu(url)
      .subscribe(
      menu => {
        // console.log('getting menu from server with ', url);
        if (menu && (menu.length !== 0)) {
          this.remoteMenuList = menu;
          console.log('menu: ', this.remoteMenuList);
        }
      },
      error => {
        this.errorMessage = error;
        console.error('error getting data: ', this.errorMessage);
        this.setDefaultMenu();
      },
      () => {
        this.mergeMenus();
      });
  }

  setDefaultMenu() {
    // console.log(`setting default menu with`, this.hardCodedItems)
    this.menuList = [];
    this.hardCodedItems.map(x => {
      this.menuList.push(x);
    });
    // console.log('menu is now ', this.menuList);
  }

  mergeMenus() {
    this.menuList = [];

    this.remoteMenuList.map(x => {
      this.menuList.push(x);
    });

    this.hardCodedItems.map(x => {
      this.menuList.push(x);
    });
    console.log(`menu is now ${this.menuList}`);
  }

  // eventCalled() {
  // }
}

