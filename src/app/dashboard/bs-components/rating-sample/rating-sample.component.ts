import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-sample',
  templateUrl: './rating-sample.component.html',
  styleUrls: ['./rating-sample.component.scss']
})
export class RatingSampleComponent implements OnInit {

  public max = 10;
  public rate = 7;
  public isReadonly = true;
  public dynMax = 10;
  public dynRate = 7;
  public dynIsReadonly = false;

  public overStar: number;
  public percent: number;

  public x = 5;
  public y = 2;

  public ratingStates: any = [
    { stateOn: 'fa fa-check-circle', stateOff: 'fa fa-check-circle-o' },
    { stateOn: 'fa fa-star', stateOff: 'fa fa-star-o' },
    { stateOn: 'fa fa-heart', stateOff: 'fa fa-ban' },
    { stateOn: 'fa fa-heart', stateOff: 'fa fa-star-o' },
    { stateOn: 'fa fa-star', stateOff: 'fa fa-power-off' }
  ];


  constructor() { }

  ngOnInit() {
  }

  public hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = 100 * (value / this.max);
  };

  public resetStar(): void {
    this.overStar = void 0;
  }

}
