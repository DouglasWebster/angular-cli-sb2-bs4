/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CollapseModule } from 'ng2-bootstrap/collapse';
import { SidebarComponent } from './sidebar.component';
import { SidebarService } from './sidebar.service';

class MockSidebarService {
  mockMenu = {
    'data': [
      {
        'name': 'Elements', 'link': 'element', 'glyph': 'fa fa-fw fa-desktop', 'children': [], 'subMenuIndex': 0
      },
      {
        'name': 'Components', 'link': 'components', 'glyph': 'fa fa-fw fa-plus', 'children': [
          { 'name': 'Popover', 'link': 'popover', 'glyph': '' },
          { 'name': 'Progress Bar', 'link': 'progress', 'glyph': '' },
          { 'name': 'Ratings', 'link': 'ratings', 'glyph': '' }
        ], 'collapse': true
      }
    ]
  };

  getMenu() {
    const menu = Observable.of().map(mockMenu => JSON.stringify(mockMenu));
    return menu;
  }
}

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CollapseModule.forRoot()],
      declarations: [SidebarComponent],
      providers: [
        { provide: SidebarService, useClass: MockSidebarService }
      ]
    });
    // .compileComponents(); <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should include the hard coded menu items', () => {
    expect(component.menuList.length).toEqual(2, '');
    expect(component.menuList[0].name).toEqual('Blank Page');
  });

  describe('getMenu()', () => {
    it('getMenu() should add items to the menu', () => {
      component.getMenu();
      let menuLength = component.menuList.length;
      
      expect(menuLength).toEqual(4, 'menu has not been added correctly');
    });
  });

});
