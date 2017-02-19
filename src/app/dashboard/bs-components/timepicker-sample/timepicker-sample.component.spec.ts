/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TimepickerModule} from 'ng2-bootstrap/timepicker';
import { TimepickerSampleComponent } from './timepicker-sample.component';

describe('TimepickerSampleComponent', () => {
  let component: TimepickerSampleComponent;
  let fixture: ComponentFixture<TimepickerSampleComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TimepickerModule.forRoot()],
      declarations: [ TimepickerSampleComponent ]
    });
   // .compileComponents(); <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimepickerSampleComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
