/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModalModule } from 'ng2-bootstrap/modal';
import { ModalSampleComponent } from './modal-sample.component';

describe('ModalSampleComponent', () => {
  let component: ModalSampleComponent;
  let fixture: ComponentFixture<ModalSampleComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ModalModule.forRoot()],
      declarations: [ ModalSampleComponent ]
    });
   // .compileComponents(); <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSampleComponent);
    component = fixture.componentInstance;
    debugEl =  fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
