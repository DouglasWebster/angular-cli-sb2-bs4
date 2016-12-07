/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BsElementsComponent } from './bs-elements.component';

describe('BsElementsComponent', () => {
  let component: BsElementsComponent;
  let fixture: ComponentFixture<BsElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
