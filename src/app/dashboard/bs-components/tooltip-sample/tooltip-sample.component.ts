import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-sample',
  templateUrl: './tooltip-sample.component.html',
  styleUrls: ['./tooltip-sample.component.scss']
})
export class TooltipSampleComponent implements OnInit {

  public content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';

  constructor() { }

  ngOnInit() {
  }

}
