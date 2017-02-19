/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard.component';
import { TopnavComponent } from '../shared/topnav/topnav.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { CollapseModule } from 'ng2-bootstrap/collapse';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CollapseModule.forRoot()],
      declarations: [DashboardComponent, TopnavComponent, SidebarComponent]
    });
    // .compileComponents(); <- not required for webpack <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;

    fixture.detectChanges();
  });

  /***************************
   * todo
   * finish this, currently stuck at sidebar service
  ****************************/

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
