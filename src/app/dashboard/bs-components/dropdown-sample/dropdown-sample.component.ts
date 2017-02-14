import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-sample',
  templateUrl: './dropdown-sample.component.html',
  styleUrls: ['./dropdown-sample.component.scss']
})
export class DropdownSampleComponent implements OnInit {

  public items: string[] = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];

  constructor() { }

  ngOnInit() {
  }

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }
}
