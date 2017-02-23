/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { CollapseModule } from 'ng2-bootstrap/collapse';

import { DashboardComponent } from './dashboard.component';
import { TopnavComponent } from '../shared/topnav/topnav.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { SidebarService } from '../shared/sidebar/sidebar.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule, CollapseModule.forRoot()],
      declarations: [DashboardComponent, TopnavComponent, SidebarComponent],
      providers: [SidebarService]
    });
    // .compileComponents(); <- not required for webpack <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
