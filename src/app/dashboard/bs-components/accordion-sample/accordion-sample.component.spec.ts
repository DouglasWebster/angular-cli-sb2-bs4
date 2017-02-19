/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AccordionModule } from 'ng2-bootstrap/accordion';

import { AccordionSampleComponent } from './accordion-sample.component';

describe('AccordionSampleComponent', () => {
  let component: AccordionSampleComponent;
  let fixture: ComponentFixture<AccordionSampleComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccordionModule.forRoot()],
      declarations: [AccordionSampleComponent]
    });
      // .compileComponents(); <- not required for webpack <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionSampleComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have an accordion group with heading 'I can have markup'`, () => {
    expect(debugEl.query(By.css('[accordion-heading]')).nativeElement.textContent).toContain('I can have markup');
  });
});
