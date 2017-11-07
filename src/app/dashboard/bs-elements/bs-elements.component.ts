import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-elements',
  templateUrl: './bs-elements.component.html',
  styleUrls: ['./bs-elements.component.scss']
})
export class BsElementsComponent implements OnInit {

  public lightNavCollapsed = true;
  public darkNavCollapsed = true;
  public primaryNavCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
