/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as moment from 'moment';

import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { DateSampleComponent } from './date-sample.component';

describe('DateSampleComponent', () => {
  let component: DateSampleComponent;
  let fixture: ComponentFixture<DateSampleComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, DatepickerModule.forRoot()],
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

  it('should display todays date', () => {
    const dispDate = moment();
    expect(debugEl.query(By.css('.card-block')).nativeElement.textContent).toContain(dispDate.format('dddd, MMMM D, YYYY'));
  });

  it('should display \'Monday, August 24, 2009\' when button labeled 2008-09-24 is pressed', () => {
    const dispDate = moment('2009-08-24');
    const btns = debugEl.queryAll(By.css('.btn'));
    btns.forEach(btn => {
      if (btn.nativeElement.textContent === '2009-08-24') {
        btn.nativeElement.click();
      };
    });
    fixture.detectChanges();
    expect(debugEl.query(By.css('.card-block')).nativeElement.textContent).toContain(dispDate.format('dddd, MMMM D, YYYY'));
  });

  it('should display todays date when button \'Today\' is clicked', () => {
    const dispDate = moment();
    const btns = debugEl.queryAll(By.css('.btn'));
    btns.forEach(btn => {
      if (btn.nativeElement.textContent === 'Today') {
        btn.nativeElement.click();
      };
    });
    fixture.detectChanges();
    expect(debugEl.query(By.css('.card-block')).nativeElement.textContent).toContain(dispDate.format('dddd, MMMM D, YYYY'));
  });

  it('should disable the selection of tomorrows date when \'Disable Tomorrow\' button is clicked', () => {
    const dispDate = moment();
    const tomorrowDay = dispDate.add(1, 'd').date().toString();
    const btns = debugEl.queryAll(By.css('.btn'));
    btns.forEach(btn => {
      if (btn.nativeElement.textContent === 'Disable Tomorrow') {
        btn.nativeElement.click();
      };
    });

    fixture.detectChanges();
    const btnTxt = debugEl.query(By.css('.disabled')).nativeElement.textContent;
    expect(btnTxt).toContain(tomorrowDay);
  });

  it('should re-enable the selection of tomorrows date when \'clear\' button is clicked', () => {
    const dispDate = moment();
    const tomorrowDay = dispDate.add(1, 'd').date().toString();
    debugEl.queryAll(By.css('.btn')).forEach(btn => {
      if (btn.nativeElement.textContent === 'Clear') {
        btn.nativeElement.click();
      };
    });

    fixture.detectChanges();
    expect(debugEl.query(By.css('.disabled'))).toBeNull();
  });


});
