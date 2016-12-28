import { Component, OnInit, /*ChangeDetectionStrategy,*/ ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';

@Component({
  selector: 'app-bs-component',
  // changeDetection: ChangeDetectionStrategy.OnPush,  // <-- this does not seem to be needed any more
  templateUrl: './bs-components.component.html',
  styleUrls: ['./bs-components.component.css']
})
export class BsComponentsComponent {

  // Model - don't forget the app.component hack!!!
  @ViewChild('childModal') public childModal: ModalDirective;
  @ViewChild('lgModal') public lgModal: ModalDirective;

  // Alert
  public alerts: Array<Object> = [{
    type: 'danger',
    msg: 'Oh snap! Change a few things up and try submitting again.',
    closable: true
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
  public smallnumPages: number;

  public maxSize: number = 5;
  public bigTotalItems: number = 175;
  public bigCurrentPage: number = 1;
  public numPages: number;

  // Progress Bar
  public max: number = 200;
  public showWarning: boolean;
  public dynamic: number;
  public type: string;
  public stacked: any[] = [];

  // Rating
  public x: number = 5;
  public y: number = 2;
  public maxRating: number = 10;
  public rate: number = 7;
  public isReadonly: boolean = false;

  public overStar: number;
  public percent: number;

  // Tabs
  public selectThirdTabBtnDisabled: boolean = true;
  public tabs: Array<any> = [
    { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
    { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true },
    { title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true },
    { title: 'Dynamic Title 4', content: 'Dynamic content 4', customClass: 'customClass' }
  ];


  public ratingStates: any = [
    { stateOn: 'fa fa-check-circle', stateOff: 'fa fa-check-circle-o' },
    { stateOn: 'fa fa-star', stateOff: 'fa fa-star-o' },
    { stateOn: 'fa fa-heart', stateOff: 'fa fa-ban' },
    { stateOn: 'fa fa-heart', stateOff: 'fa fa-star-o' },
    { stateOn: 'fa fa-star', stateOff: 'fa fa-power-off' }
  ];

  constructor() {
    this.random();
    this.randomStacked();
  }

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

  // Progress Bar
  public random(): void {
    let value = Math.floor((Math.random() * 100) + 1);
    let type: string;

    if (value < 25) {
      type = 'success';
    } else if (value < 50) {
      type = 'info';
    } else if (value < 75) {
      type = 'warning';
    } else {
      type = 'danger';
    }

    this.showWarning = (type === 'danger' || type === 'warning');
    this.dynamic = value;
    this.type = type;
  };

  public randomStacked(): void {
    let types = ['success', 'info', 'warning', 'danger'];

    this.stacked = [];
    let total = 0;
    let n = Math.floor((Math.random() * 4) + 1);
    for (let i = 0; i < n; i++) {
      let index = Math.floor((Math.random() * 4));
      let value = Math.floor((Math.random() * 30) + 1);
      total += value;
      this.stacked.push({
        value: value,
        max: value, // i !== (n - 1) ? value : 100,
        type: types[index]
      });
    }
  };

  // Rating
  public hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = 100 * (value / this.maxRating);
  };

  public resetStar(): void {
    this.overStar = void 0;
  }

  // tabs
  public alertMe(): void {
    setTimeout(function (): void {
      alert('You\'ve selected the alert tab!');
    });
  };

  public setActiveTab(index: number): void {
    this.tabs[index].active = true;
  };

  public enableThirdTab(): void {
    this.selectThirdTabBtnDisabled = ! this.selectThirdTabBtnDisabled;
    this.tabs[1].disabled = ! this.tabs[1].disabled;
  }

  public removeTabHandler(/*tab:any*/): void {
    console.log('Remove Tab handler');
  };

}
