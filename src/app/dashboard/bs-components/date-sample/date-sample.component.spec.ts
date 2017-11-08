/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as moment from 'moment';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DateSampleComponent } from './date-sample.component';

describe('DateSampleComponent', () => {
  let component: DateSampleComponent;
  let fixture: ComponentFixture<DateSampleComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, BsDatepickerModule.forRoot()],
      declarations: [DateSampleComponent]
    });
    // .compileComponents(); <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSampleComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display todays date for the single value picker', () => {
    const dispDate = moment();
    expect(debugEl.query(By.css('[bsDatepicker]')).nativeElement.value).toContain(dispDate.format('MM/DD/YYYY'));
  });

});
