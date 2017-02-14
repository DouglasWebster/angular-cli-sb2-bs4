import { Component, OnInit, /*ChangeDetectionStrategy,*/ ViewChild } from '@angular/core';

@Component({
  selector: 'app-bs-component',
  // changeDetection: ChangeDetectionStrategy.OnPush,  // <-- this does not seem to be needed any more
  templateUrl: './bs-components.component.html',
  styleUrls: ['./bs-components.component.scss']
})
export class BsComponentsComponent {

  constructor() {
  }

}
