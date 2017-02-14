import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timepicker-sample',
  templateUrl: './timepicker-sample.component.html',
  styleUrls: ['./timepicker-sample.component.scss']
})
export class TimepickerSampleComponent implements OnInit {

  public tpMytime: Date = new Date();

  public mIsmeridian = true;
  public mMytime: Date = new Date();

  public dIsEnabled = true;
  public dMytime: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  public mToggleMode(): void {
    this.mIsmeridian = !this.mIsmeridian;
  }

}
