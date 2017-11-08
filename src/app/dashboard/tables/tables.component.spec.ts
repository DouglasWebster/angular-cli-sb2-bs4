/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TablesComponent } from './tables.component';

describe('TablesComponent', () => {
  let component: TablesComponent;
  let fixture: ComponentFixture<TablesComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesComponent ]
    });
   // .compileComponents(); <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the page header 'Tables'`, () => {
    expect(debugEl.query(By.css('h2')).nativeElement.textContent).toContain('Tables');

  });

});

