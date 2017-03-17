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
      declarations: [ProgressSampleComponent]
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

  it(`should have a section labled Static`, () => {
    const staticEl = debugEl.query(By.css('h4'));
    expect(staticEl.nativeElement.textContent).toEqual('Static');
  });

  it(`should have 2 section whose lable starts with 'Dynamic'`, () => {
    const dynEl = debugEl.queryAll(By.css('h4')).filter(e => e.nativeElement.textContent.startsWith('Dynamic'));
    expect(dynEl.length).toEqual(2);
  });

  it('should have 3 progress bars in the second Dynamic section', () => {
    const pBarParent = debugEl.queryAll(By.css('h4')).filter(e => e.nativeElement.textContent.startsWith('Dynamic'))[1].parent;
    expect(pBarParent.queryAll(By.css('.progress')).length).toEqual(3);
  });

  it(`should have the legend 'value / max' on the first progress bar of the second Dynamic section`, () => {
    const pBarParent = debugEl.queryAll(By.css('h4')).filter(e => e.nativeElement.textContent.startsWith('Dynamic'))[1].parent;
    const pBar = pBarParent.query(By.css('.progress-bar'));
    const txtString = component.dynamic.toString() + ' / ' + component.max.toString();
    expect(pBar.nativeElement.textContent).toContain(txtString);
  });

  it(`should have a 'Randomize' button in the second Dynamic Section`, () => {
    const dynSec = debugEl.queryAll(By.css('h4')).filter(e => e.nativeElement.textContent.startsWith('Dynamic'))[1].parent;
    expect(dynSec.query(By.css('button')).nativeElement.textContent).toContain('Randomize');
  });

  it('should generate new values in the second Dynamic section when the Randomize button is pressed', () => {
    const dynSec = debugEl.queryAll(By.css('h4')).filter(e => e.nativeElement.textContent.startsWith('Dynamic'))[1].parent;
    const rndBtn = dynSec.query(By.css('button'));
    rndBtn.nativeElement.click();
    fixture.detectChanges();
    const pBar = dynSec.query(By.css('.progress-bar'));
    const txtString = component.dynamic.toString() + ' / ' + component.max.toString();
    expect(pBar.nativeElement.textContent).toContain(txtString);
  });

});


