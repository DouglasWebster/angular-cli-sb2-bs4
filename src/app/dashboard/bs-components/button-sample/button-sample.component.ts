import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-sample',
  templateUrl: './button-sample.component.html',
  styleUrls: ['./button-sample.component.scss']
})
export class ButtonSampleComponent implements OnInit {

  public radioModel = 'Middle';

  constructor() { }

  ngOnInit() {
  }

}
