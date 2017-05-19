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

});
