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
      declarations: [PopoverSampleComponent]
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

  it(`should have a button labled 'Popover on right'`, () => {
    const btn = debugEl.query(By.css('[popoverTitle = "Popover on right"]'));
    expect(btn.nativeElement.textContent).toContain('Popover on right');
  });

  it('should create a popover when the button is clicked', () => {
    const btn = debugEl.query(By.css('[popoverTitle = "Popover on right"]'));
    btn.nativeElement.click();
    fixture.detectChanges();
    const popEl = debugEl.query(By.css('.popover-title'));
    console.log('popover: ', popEl);
    expect(popEl.nativeElement.textContent).toContain('Popover on right');
  });

  it('should dismiss the popover when the button is clicked again', () => {
    const btn = debugEl.query(By.css('[popoverTitle = "Popover on right"]'));
    btn.nativeElement.click();
    fixture.detectChanges();
    btn.nativeElement.click();
    fixture.detectChanges();
    const popEl = debugEl.query(By.css('.popover-title'));
    expect(popEl).toBeNull();
  });
});
