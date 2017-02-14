import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse-sample',
  templateUrl: './collapse-sample.component.html',
  styleUrls: ['./collapse-sample.component.scss']
})
export class CollapseSampleComponent implements OnInit {

  public isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

  public collapsed(event: any): void {
    console.log(event);
  }

  public expanded(event: any): void {
    console.log(event);
  }


}
