/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DropdownSampleComponent } from './dropdown-sample.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

describe('DropdownSampleComponent', () => {
  let component: DropdownSampleComponent;
  let fixture: ComponentFixture<DropdownSampleComponent>;
  let debugEl: DebugElement;
  let nativeEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BsDropdownModule.forRoot()],
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

  it('should have a button labled Button dropdown', () => {
    const dropdownTggl = debugEl.query(By.css('[dropdownToggle')).nativeElement;
    console.log(dropdownTggl);

    expect(debugEl.query(By.css('[dropdownToggle]')).nativeElement.textContent).toContain('Button dropdown');
  });

  it('should open the dropdown when the Button dropdown is pressed', () => {
    const dropdownTggl = debugEl.query(By.css('[dropdownToggle'));
    dropdownTggl.nativeElement.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('[dropdown]').classList).toContain('open');
  });

  it('should close the dropdown when the Button dropdown is pressed again', () => {
    const dropdownTggl = debugEl.query(By.css('[dropdownToggle'));
    dropdownTggl.nativeElement.click();
    fixture.detectChanges();
    dropdownTggl.nativeElement.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('[dropdown]').classList).not.toContain('open');
  });



});
