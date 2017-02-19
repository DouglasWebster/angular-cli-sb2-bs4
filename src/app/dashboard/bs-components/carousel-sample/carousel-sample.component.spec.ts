/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CarouselModule } from 'ng2-bootstrap/carousel';
import { CarouselSampleComponent } from './carousel-sample.component';

describe('CarouselSampleComponent', () => {
  let component: CarouselSampleComponent;
  let fixture: ComponentFixture<CarouselSampleComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, CarouselModule.forRoot()],
      declarations: [ CarouselSampleComponent ]
    });
   // .compileComponents(); <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselSampleComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
