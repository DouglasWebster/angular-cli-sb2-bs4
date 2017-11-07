import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-tabs-sample',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tabs-sample.component.html',
  styleUrls: ['./tabs-sample.component.scss']
})
export class TabsSampleComponent implements OnInit {

  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  public tabs: any[] = [
    { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
    { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true },
    { title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true }
  ];

  constructor() { }

  ngOnInit() {
  }

  public alertMe(): void {
    setTimeout(function (): void {
      alert('You\'ve selected the alert tab!');
    });
  }

  public setActiveTab(index: number): void {
    this.tabs[index].active = true;
  }

  addNewTab(): void {
    const newTabIndex = this.tabs.length + 1;
    this.tabs.push({
      title: `Dynamic Title ${newTabIndex}`,
      content: `Dynamic content ${newTabIndex}`,
      disabled: false,
      removable: true
    });
  }

  removeTabHandler(tab: any): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
    console.log('Remove Tab handler');

  }
}
