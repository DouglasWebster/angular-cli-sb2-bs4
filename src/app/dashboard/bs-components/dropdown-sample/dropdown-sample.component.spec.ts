/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DropdownSampleComponent } from './dropdown-sample.component';

describe('DropdownSampleComponent', () => {
  let component: DropdownSampleComponent;
  let fixture: ComponentFixture<DropdownSampleComponent>;
  let debugEl: DebugElement;
  let nativeEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownSampleComponent]
    });
    // .compileComponents(); <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownSampleComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    nativeEl = debugEl.nativeElement;

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button labeled Button Dropdown', () => {
    let btn;
    debugEl.queryAll(By.css('.btn')).forEach(el => {
      if (el.nativeElement.outerText === 'Button dropdown') {
        btn = el;
      }
    });

    expect(btn.nativeElement).toBeDefined('Button Dropdown not defined');

  });

  it('should have a list containg \'Action\'', () => {

    debugEl.queryAll(By.css('.btn')).map(el => {
      if (el.nativeElement.outerText === 'Button dropdown') {
        el.nativeElement.click();
      }
    });
    expect(debugEl.query(By.css('.dropdown-item')).nativeElement.textContent).toContain('Action');
  });

/****************
 * to-do add test to see if the dropdown is opening
 * and closing when a click event occurs
*****************/

});
