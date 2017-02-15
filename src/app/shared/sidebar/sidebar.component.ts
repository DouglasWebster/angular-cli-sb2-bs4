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

  public menuList = [
  ];

  public hardCodedItems = [
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
    this.getMenu();
  }

  getMenu() {
    this.menuService.getMenu()
      .subscribe(
      menu => {
        this.menuList = menu;
      },
      error => {
        this.errorMessage = <any>error;
        this.mergeMenus();
      },
      () => {
        this.mergeMenus();
      });
  }

  mergeMenus() {
    this.hardCodedItems.map(x => {
      this.menuList.push(x);
    });
  }

  eventCalled() {
  }
}

