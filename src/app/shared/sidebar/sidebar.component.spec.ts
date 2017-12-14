import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule } from '@angular/router';

import { async, ComponentFixture, TestBed, getTestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { SidebarComponent } from './sidebar.component';
import { SidebarService } from './sidebar.service';

const mockMenu = {
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

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SidebarComponent
      ],
      providers: [
        SidebarService
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        RouterModule,
        CollapseModule.forRoot()
      ]
    });

    TestBed.compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    // fixture.detectChanges();
    // const testBed = getTestBed();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be created initially with just the hard coded items', () => {
    fixture.detectChanges();
    const deflistLength = component.hardCodedItems.length;
    const defFirstName = component.hardCodedItems[0].name;
    const compListLength = component.menuList.length;
    const compFirstName = component.menuList[0].name;
    expect(compListLength).toEqual(deflistLength, 'menu list not instantiated correctly');
    expect(compFirstName).toEqual(defFirstName, `first item name doesn't equal ${defFirstName}`);
  });

  it('should create the menu with just the hard coded items when subscribed to with a bad url', () => {
    fixture.detectChanges();
    console.log('calling getMenu with bad Url');
    component.getMenu('badUrl');

    const deflistLength = component.hardCodedItems.length;
    const defFirstName = component.hardCodedItems[0].name;
    const compListLength = component.menuList.length;
    const compFirstName = component.menuList[0].name;
    expect(compListLength).toEqual(deflistLength, 'menu list not instantiated correctly');
    expect(compFirstName).toEqual(defFirstName, `first item name doesn't equal ${defFirstName}`);
  });

  it('should create the menu with combined hard coded items and remote items when subscribed to with a goodUrl', () => {
    fixture.detectChanges();
    console.log('calling getMenu');
    component.getMenu('goodUrl');
    component.remoteMenuList = mockMenu['data'];
    component.mergeMenus();

    const combListLength = component.hardCodedItems.length + mockMenu.data.length;
    const combFirstName = mockMenu.data[0].name;
    const compListLength = component.menuList.length;
    const compFirstName = component.menuList[0].name;
    expect(compListLength).toEqual(combListLength, 'menu list not instantiated correctly');
    expect(compFirstName).toEqual(combFirstName, `first item name doesn't equal ${combFirstName}`);
  });

});
