/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProgressbarModule } from 'ng2-bootstrap/progressbar';
import { ProgressSampleComponent } from './progress-sample.component';

describe('ProgressSampleComponent', () => {
  let component: ProgressSampleComponent;
  let fixture: ComponentFixture<ProgressSampleComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProgressbarModule.forRoot()],
      declarations: [ ProgressSampleComponent ]
    });
   // .compileComponents(); <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSampleComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
