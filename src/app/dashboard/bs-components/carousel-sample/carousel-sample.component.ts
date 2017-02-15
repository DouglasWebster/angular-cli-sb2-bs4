import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-sample',
  templateUrl: './carousel-sample.component.html',
  styleUrls: ['./carousel-sample.component.scss'],
})
export class CarouselSampleComponent implements OnInit {

  public myInterval = 1500;
  public slides: any[] = [];
  public activeSlideIndex: number;
  public noWrapSlides = false;

  public constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  ngOnInit() {
  }

  public addSlide(): void {
    this.slides.push({
      image: `assets/img/slider${this.slides.length % 4}.jpg`
    });
  }

  public removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }
}
