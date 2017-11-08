/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';

import { BsElementsComponent } from './bs-elements.component';

describe('BsElementsComponent', () => {
  let component: BsElementsComponent;
  let fixture: ComponentFixture<BsElementsComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CollapseModule.forRoot(),
        BsDropdownModule.forRoot()
      ],
      declarations: [ BsElementsComponent ],

    });
   // .compileComponents(); <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsElementsComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
