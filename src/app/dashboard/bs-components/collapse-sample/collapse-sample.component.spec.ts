/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CollapseModule } from 'ng2-bootstrap/collapse';
import { CollapseSampleComponent } from './collapse-sample.component';

describe('CollapseSampleComponent', () => {
  let component: CollapseSampleComponent;
  let fixture: ComponentFixture<CollapseSampleComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CollapseModule.forRoot()],
      declarations: [ CollapseSampleComponent ]
    });
   // .compileComponents(); <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseSampleComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
