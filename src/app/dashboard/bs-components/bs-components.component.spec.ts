/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BsComponentsComponent } from './bs-components.component';

describe('BsComponentsComponent', () => {
  let component: BsComponentsComponent;
  let fixture: ComponentFixture<BsComponentsComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BsComponentsComponent]
    });
   // .compileComponents(); <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsComponentsComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the page header 'NG2-Bootstrap'`, () => {
    expect(debugEl.query(By.css('.page-header')).nativeElement.textContent).toContain('NG2-Bootstrap');

  });
});
