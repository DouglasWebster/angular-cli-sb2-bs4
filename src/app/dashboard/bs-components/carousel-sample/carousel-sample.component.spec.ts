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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, CarouselModule.forRoot()],
      declarations: [CarouselSampleComponent]
    })
      .compileComponents(); // <- not needed with webpack!
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselSampleComponent);
    component = fixture.componentInstance;
  });

  it('should create', async () => {

    fixture.detectChanges();
    console.log(component);
    
    expect(component).toBeTruthy();
    expect(component).not.toBeTruthy();
  });

  it('should have the correct number of slides', async () => {
    fixture.detectChanges();
    const noOfSlides = component.slides.length;
    console.log(`Carousel has ${noOfSlides} slides`);
    expect(component.slides.length).toEqual(20);
  });

  describe('when a slide is removed', () => {
    it('should have the correct number of slides', async () => {
      fixture.detectChanges();
      expect(component.slides.length).toEqual(4);
    });
  });
});
