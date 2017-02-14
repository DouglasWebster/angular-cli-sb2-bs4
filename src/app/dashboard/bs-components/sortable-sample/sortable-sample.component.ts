import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sortable-sample',
  templateUrl: './sortable-sample.component.html',
  styleUrls: ['./sortable-sample.component.scss']
})
export class SortableSampleComponent implements OnInit {

  public itemStringsLeft: any[] = [
    'Windstorm',
    'Bombasto',
    'Magneta',
    'Tornado'
  ];

  public itemStringsRight: any[] = [
    'Mr. O',
    'Tomato'
  ];

  public itemObjectsLeft: any[] = [
    { id: 1, name: 'Windstorm' },
    { id: 2, name: 'Bombasto' },
    { id: 3, name: 'Magneta' }
  ];

  public itemObjectsRight: any[] = [
    { id: 4, name: 'Tornado' },
    { id: 5, name: 'Mr. O' },
    { id: 6, name: 'Tomato' }
  ];

  public itemCuStringsLeft: any[] = [
    'Windstorm',
    'Bombasto',
    'Magneta',
    'Tornado'
  ];

  public itemCuStringsRight: any[] = [
    'Mr. O',
    'Tomato'
  ];

  constructor() { }

  ngOnInit() {
  }

}
