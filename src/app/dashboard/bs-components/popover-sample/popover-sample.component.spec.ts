/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PopoverModule } from 'ng2-bootstrap/popover';
import { PopoverSampleComponent } from './popover-sample.component';

describe('PopoverSampleComponent', () => {
  let component: PopoverSampleComponent;
  let fixture: ComponentFixture<PopoverSampleComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PopoverModule.forRoot()],
      declarations: [ PopoverSampleComponent ]
    });
   // .compileComponents(); <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverSampleComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
