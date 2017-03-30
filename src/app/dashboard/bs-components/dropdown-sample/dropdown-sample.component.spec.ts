/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DropdownSampleComponent } from './dropdown-sample.component';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';

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

  it('should have a dropdown button labeled Button Dropdown', () => {

    expect(debugEl.query(By.css('#single-button')).nativeElement).toBeDefined('Button Dropdown not defined');

  });

  it('should have the Dropdown Button dropdown closed by default', () => {
    fixture.detectChanges();
    const btn = debugEl.query(By.css('#single-button'));
    console.log(btn);

    expect(btn.nativeElement.parentElement.classList).not.toContain('open');
  });


  it('should open and close the Dropdown Button dropdown when the button is repeatedly clicked', () => {

    fixture.detectChanges();
    const btn = debugEl.query(By.css('#single-button'));
    btn.nativeElement.click();
    fixture.detectChanges();
    expect(btn.nativeElement.parentElement.classList).toContain('open', 'failed to open');
    btn.nativeElement.click();
    fixture.detectChanges();
    expect(btn.nativeElement.parentElement.classList).not.toContain('open', 'failed to close');
    btn.nativeElement.click();
    fixture.detectChanges();
    expect(btn.nativeElement.parentElement.classList).toContain('open', 'failed to reopen');
  });


  it('should have a hyperlink that acts as a dropdown', () => {
    const btn = debugEl.query(By.css('#simple-dropdown'));
    console.log('hyperlink button is: ', btn);
    spyOn(component, 'toggled').and.callThrough();
    btn.nativeElement.click();
    expect(component.toggled).toHaveBeenCalledWith(true);
  });


});
