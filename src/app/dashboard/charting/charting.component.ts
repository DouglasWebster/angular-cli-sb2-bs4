import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-charts',
  templateUrl: './charting.component.html',
  styleUrls: ['./charting.component.scss']
})
export class ChartingComponent implements OnInit {

  public ptRadius = 5;

  public chartColors: Array<any> = [
    { // blue
      backgroundColor: 'rgba(124, 181, 236, 0.75)',
      borderColor: 'rgba(124, 181, 236, 1.0)',
      pointStyle: 'circle',
      pointRadius: this.ptRadius
    },
    { // black
      backgroundColor: 'rgba(67,67,72, 0.75)',
      borderColor: 'rgba(67,67,72, 1.0)',
      pointStyle: 'rectRot',
      pointRadius: this.ptRadius
    },
    { // green
      backgroundColor: 'rgba(144,237,125, 0.75)',
      borderColor: 'rgba(144,237,125,1.0)',
      pointStyle: 'rect',
      pointRadius: this.ptRadius
    },
    { // brown
      backgroundColor: 'rgba(247,163,92, 0.75)',
      borderColor: 'rgba(247,163,92, 1.0)',
      pointStyle: 'triangle',
      pointRadius: this.ptRadius
    },
    { // purple
      backgroundColor: 'rgba(147,112,216, 0.75)',
      borderColor: 'rgba(147,112,216, 1.0)',
      pointStyle: 'star',
      pointRadius: this.ptRadius
    }
  ];

  // lineChart
  public lineChartData: Array<any> = [
    { data: [502, 635, 809, 947, 1402, 3634, 5268], label: 'Asia', lineTension: 0 },
    { data: [106, 107, 111, 133, 221, 767, 1766], label: 'Africa', lineTension: 0 },
    { data: [163, 203, 276, 408, 547, 729, 628], label: 'Europe', lineTension: 0 },
    { data: [18, 31, 54, 156, 339, 818, 1201], label: 'America', lineTension: 0 },
    { data: [2, 2, 2, 6, 13, 30, 46], label: 'Oceania', lineTension: 0 }
  ];
  public lineChartLabels: Array<any> = ['1750', '1800', '1850', '1900', '1950', '1999', '2050'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true,
    title: {
      display: true,
      text: 'Historic and Estimated Worldwide Population Distribution by Region'
    },
    legend: {
      position: 'bottom'
    },
    scales: {
      yAxes: [{
        stacked: true,
        scaleLabel: {
          display: true,
          labelString: 'Millions'
        }
      }]
    },
    tooltips: {
      mode: 'index'
    }
  };

  public lineChartLegend = true;
  public lineChartType = 'line';

  // area with negative values
  public areaChartData: Array<any> = [
    { data: [5, 3, 4, 7, 2], label: 'John', lineTension: 0 },
    { data: [2, -2, -3, 2, 1], label: 'Jane', lineTension: 0 },
    { data: [3, 4, 4, -2, 5], label: 'Joe', lineTension: 0 }
  ];

  public areaChartLabels: Array<any> = ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'];

  public areaChartOptions: any = {
    animation: false,
    responsive: true,
    title: {
      display: true,
      text: 'Area chart with negative values'
    },
    legend: {
      position: 'bottom'
    },
    scales: {
      yAxes: [{
        stacked: true,
        scaleLabel: {
          display: true,
          labelString: 'Values'
        }
      }]
    }
  };

  public areaChartLegend = true;
  public areaChartType = 'line';

  // bar chart
  public barChartData: Array<any> = [
    { data: [5, 3, 4, 7, 2], label: 'John' },
    { data: [3, 4, 4, 2, 5], label: 'Joe' },
    { data: [2, 5, 6, 2, 1], label: 'Jane' },
    { data: [3, 0, 4, 4, 3], label: 'Janet' }
  ];

  public barChartLabels: Array<any> = ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'];

  public barChartOptions: any = {
    animation: false,
    responsive: true,
    title: {
      display: true,
      text: 'Total fruit consumtion, grouped by gender'
    },
    legend: {
      position: 'bottom'
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Number of fruits'
        }
      }]
    }
  };

  public barChartLegend = true;
  public barChartType = 'bar';

  // time chart

  public timeChartData: Array<any> = [{
    label: 'Winter 2012-2013',
    data: [
      { x: moment('1970-10-21', 'YYYY-MM-DD'), y: 0.00 },
      { x: moment('1970-11-04', 'YYYY-MM-DD'), y: 0.28 },
      { x: moment('1970-11-09', 'YYYY-MM-DD'), y: 0.25 },
      { x: moment('1970-11-27', 'YYYY-MM-DD'), y: 0.20 },
      { x: moment('1970-12-02', 'YYYY-MM-DD'), y: 0.28 },
      { x: moment('1970-12-26', 'YYYY-MM-DD'), y: 0.28 },
      { x: moment('1970-12-29', 'YYYY-MM-DD'), y: 0.47 },
      { x: moment('1971-01-11', 'YYYY-MM-DD'), y: 0.79 },
      { x: moment('1971-01-26', 'YYYY-MM-DD'), y: 0.72 },
      { x: moment('1971-02-03', 'YYYY-MM-DD'), y: 1.02 },
      { x: moment('1971-02-11', 'YYYY-MM-DD'), y: 1.12 },
      { x: moment('1971-02-25', 'YYYY-MM-DD'), y: 1.20 },
      { x: moment('1971-03-11', 'YYYY-MM-DD'), y: 1.18 },
      { x: moment('1971-04-11', 'YYYY-MM-DD'), y: 1.19 },
      { x: moment('1971-05-01', 'YYYY-MM-DD'), y: 1.85 },
      { x: moment('1971-05-05', 'YYYY-MM-DD'), y: 2.22 },
      { x: moment('1971-05-19', 'YYYY-MM-DD'), y: 1.15 },
      { x: moment('1971-06-03', 'YYYY-MM-DD'), y: 0.00 }
    ],
    fill: false
  }, {
    label: 'Winter 2013-2014',
    data: [
      { x: moment('1970-10-29', 'YYYY-MM-DD'), y: 0.00 },
      { x: moment('1970-11-09', 'YYYY-MM-DD'), y: 0.40 },
      { x: moment('1970-12-01', 'YYYY-MM-DD'), y: 0.25 },
      { x: moment('1971-01-01', 'YYYY-MM-DD'), y: 1.66 },
      { x: moment('1971-01-10', 'YYYY-MM-DD'), y: 1.80 },
      { x: moment('1971-02-19', 'YYYY-MM-DD'), y: 1.76 },
      { x: moment('1971-03-25', 'YYYY-MM-DD'), y: 2.62 },
      { x: moment('1971-04-19', 'YYYY-MM-DD'), y: 2.41 },
      { x: moment('1971-04-30', 'YYYY-MM-DD'), y: 2.05 },
      { x: moment('1971-05-14', 'YYYY-MM-DD'), y: 1.70 },
      { x: moment('1971-05-24', 'YYYY-MM-DD'), y: 1.10 },
      { x: moment('1971-06-10', 'YYYY-MM-DD'), y: 0.00 }
    ],
    fill: false
  }, {
    label: 'Winter 2014-2015',
    data: [
      { x: moment('1970-11-25', 'YYYY-MM-DD'), y: 0.00 },
      { x: moment('1970-12-06', 'YYYY-MM-DD'), y: 0.25 },
      { x: moment('1970-12-20', 'YYYY-MM-DD'), y: 1.41 },
      { x: moment('1970-12-25', 'YYYY-MM-DD'), y: 1.64 },
      { x: moment('1971-01-04', 'YYYY-MM-DD'), y: 1.60 },
      { x: moment('1971-01-17', 'YYYY-MM-DD'), y: 2.55 },
      { x: moment('1971-01-24', 'YYYY-MM-DD'), y: 2.62 },
      { x: moment('1971-02-04', 'YYYY-MM-DD'), y: 2.50 },
      { x: moment('1971-02-14', 'YYYY-MM-DD'), y: 2.42 },
      { x: moment('1971-03-06', 'YYYY-MM-DD'), y: 2.74 },
      { x: moment('1971-03-14', 'YYYY-MM-DD'), y: 2.62 },
      { x: moment('1971-03-24', 'YYYY-MM-DD'), y: 2.60 },
      { x: moment('1971-04-02', 'YYYY-MM-DD'), y: 2.81 },
      { x: moment('1971-04-12', 'YYYY-MM-DD'), y: 2.63 },
      { x: moment('1971-04-28', 'YYYY-MM-DD'), y: 2.77 },
      { x: moment('1971-05-05', 'YYYY-MM-DD'), y: 2.68 },
      { x: moment('1971-05-10', 'YYYY-MM-DD'), y: 2.56 },
      { x: moment('1971-05-15', 'YYYY-MM-DD'), y: 2.39 },
      { x: moment('1971-05-20', 'YYYY-MM-DD'), y: 2.30 },
      { x: moment('1971-06-05', 'YYYY-MM-DD'), y: 2.00 },
      { x: moment('1971-06-10', 'YYYY-MM-DD'), y: 1.85 },
      { x: moment('1971-06-15', 'YYYY-MM-DD'), y: 1.49 },
      { x: moment('1971-06-23', 'YYYY-MM-DD'), y: 1.08 }
    ],
    fill: false
  }];

  public timeChartOptions: any = {
    animation: false,
    title: {
      display: true,
      text: 'Snow depth at Vikjafjellet, Norway'
    },
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true
      }
    },
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          unit: 'month',
          displayFormats: {
            month: 'D MMM'
          },
          tooltipFormat: 'll'
        },
        scaleLabel: {
          display: true,
          labelString: 'Date'
        },
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Snow Depth(m)'
        },
        ticks: {
          min: 0,
          fixedStepSize: 1.0
        }
      }]
    }
  };

  public timeChartLegend = true;
  public timeChartType = 'line';

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
