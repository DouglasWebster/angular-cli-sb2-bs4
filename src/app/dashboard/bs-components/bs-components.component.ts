import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';

@Component({
  selector: 'app-bs-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bs-components.component.html',
  styleUrls: ['./bs-components.component.css']
})
export class BsComponentsComponent {

  // Model - don't forget the app.component hack!!!
  @ViewChild('childModal') public childModal: ModalDirective;

  // Alert
  public alerts: Array<Object> = [{
    type: 'danger',
    msg: 'Oh snap! Change a few things up and try submitting again.'
  },
  {
    type: 'success',
    msg: 'Well done! You successfully read this important alert message.',
    closable: true
  }
  ];

  // Buttons
  public singleModel: string = '1';
  public radioModel: string = 'Middle';
  public checkModel: any = { left: false, middle: true, right: false };

  // Dropdowns
  public disabled: boolean = false;
  public status: { isopen: boolean } = { isopen: false };
  public items: Array<string> = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];

  // Pagination
  public totalItems: number = 64;
  public currentPage: number = 4;

  public maxSize: number = 5;
  public bigTotalItems: number = 175;
  public bigCurrentPage: number = 1;



  constructor() { }

  // Alert
  public closeAlert(i: number): void {
    this.alerts.splice(i, 1);
  }
  public addAlert(): void {
    this.alerts.push({ msg: 'Another alert!', type: 'warning', closable: true });
  }

  // Dropdowns
  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  //  Pagination
  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  };

  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  };
}
