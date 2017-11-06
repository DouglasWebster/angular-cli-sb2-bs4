import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/bs-moment';

@Component({
  selector: 'app-date-sample',
  templateUrl: './date-sample.component.html',
  styleUrls: ['./date-sample.component.scss']
})
export class DateSampleComponent implements OnInit {

  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);

  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];

  colorTheme = 'theme-green';

  locale = 'en';
  locales = listLocales();

  bsConfig: Partial<BsDatepickerConfig>;

  applyTheme(pop: any) {
    // create new object on each property change
    // so Angular can catch object reference change
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
    setTimeout(() => {
      pop.hide();
      pop.show();
    });
  }

  applyLocale(pop: any) {
    // create new object on each property change
    // so Angular can catch object reference change
    this.bsConfig = Object.assign({}, { locale: this.locale });
    setTimeout(() => {
      pop.show();
    });
  }

  public constructor() { }


  ngOnInit() {
  }

}
