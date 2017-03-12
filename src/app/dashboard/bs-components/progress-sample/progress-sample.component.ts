import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-sample',
  templateUrl: './progress-sample.component.html',
  styleUrls: ['./progress-sample.component.scss']
})
export class ProgressSampleComponent implements OnInit {

  public max = 200;
  public showWarning: boolean;
  public dynamic: number;
  public type: string;
  public stacked: any[] = [];

  public constructor() {
    this.random();
    this.randomStacked();
  }

  ngOnInit() {
  }

  public randomStacked(): void {
    const types = ['success', 'info', 'warning', 'danger'];

    this.stacked = [];
    let total = 0;
    const n = Math.floor((Math.random() * 4) + 1);
    for (let i = 0; i < n; i++) {
      const index = Math.floor((Math.random() * 4));
      const value = Math.floor((Math.random() * 30) + 1);
      total += value;
      this.stacked.push({
        value,
        max: value, // i !== (n - 1) ? value : 100,
        type: types[index]
      });
    }
  }
  public random(): void {
    const value = Math.floor((Math.random() * 100) + 1);
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
  }
}

