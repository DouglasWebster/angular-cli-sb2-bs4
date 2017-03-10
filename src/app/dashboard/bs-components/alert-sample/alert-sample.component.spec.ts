/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AlertModule, AlertConfig } from 'ng2-bootstrap/alert';

import { AlertSampleComponent } from './alert-sample.component';

describe('AlertSampleComponent', () => {
  let component: AlertSampleComponent;
  let fixture: ComponentFixture<AlertSampleComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AlertModule.forRoot()],
      declarations: [AlertSampleComponent]
    });
    // .compileComponents(); <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSampleComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct number of Alerts', () => {
    const noOfAlerts = component.alerts.length;
    expect(debugEl.queryAll(By.css('.alert')).length).toBe(noOfAlerts, 'alerts not set up correctly');
  });

  it(`should have an alert containing text 'successfully read'`, () => {
    expect(debugEl.query(By.css('.alert-success')).nativeElement.textContent).toContain('successfully read');
  });

  it('should have the correct number of alerts when one is dismissed', async(() => {
    const noOfAlerts = component.alerts.length;
    const button = debugEl.queryAll(By.css('button'))[0].nativeElement;
    button.click();
    fixture.detectChanges();
    expect(debugEl.queryAll(By.css('.alert')).length).toBe(noOfAlerts - 1);
  }));

  it('should have the correct number of alerts when reset is pressed', async(() => {
    const noOfAlerts = component.alerts.length;
    let button = debugEl.queryAll(By.css('button'))[0].nativeElement;
    button.click();
    fixture.detectChanges();
    button = debugEl.queryAll(By.css('button'))[2].nativeElement;
    button.click();
    fixture.detectChanges();
    expect(debugEl.queryAll(By.css('.alert')).length).toBe(noOfAlerts);

  }));



});
