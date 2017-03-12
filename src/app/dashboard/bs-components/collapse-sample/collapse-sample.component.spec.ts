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
      declarations: [CollapseSampleComponent]
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

  it('should have a collapse element in the correct state ', () => {
    const colEl = debugEl.query(By.css('.collapse'));
    const currentState = component.isCollapsed ? 'true' : 'false';
    console.log(colEl);
    expect(colEl.nativeElement.getAttribute('aria-hidden')).toBe(currentState);
  });

  it('should toggle the state of the collapse element when button clicked', () => {
    const colEl = debugEl.query(By.css('.collapse'));
    const btnEl = debugEl.query(By.css('.btn'));
    const expectedState: string = !component.isCollapsed ? 'true' : 'false';
    btnEl.nativeElement.click();
    fixture.detectChanges();
    expect(colEl.nativeElement.getAttribute('aria-hidden')).toBe(expectedState);
  });

});
