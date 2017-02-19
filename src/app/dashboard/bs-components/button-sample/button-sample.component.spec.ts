/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { ButtonSampleComponent } from './button-sample.component';

describe('ButtonSampleComponent', () => {
  let component: ButtonSampleComponent;
  let fixture: ComponentFixture<ButtonSampleComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ButtonsModule.forRoot()],
      declarations: [ ButtonSampleComponent ]
    });
      // .compileComponents(); <- not required for webpack <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSampleComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have an button labled 'Left'`, () => {
    expect(debugEl.query(By.css('.btn')).nativeElement.textContent).toContain('Left');
  });

});
