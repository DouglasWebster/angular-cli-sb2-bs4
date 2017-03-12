import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-sample',
  templateUrl: './pagination-sample.component.html',
  styleUrls: ['./pagination-sample.component.scss']
})
export class PaginationSampleComponent implements OnInit {

  public totalItems = 64;
  public currentPage = 4;
  public smallnumPages = 0;

  public maxSize = 5;
  public bigTotalItems = 175;
  public bigCurrentPage = 1;
  public numPages = 0;

  public totalPagerItems = 64;
  public currentPagerPage = 3;
  public smallnumPagerPages = 0;
  constructor() { }

  ngOnInit() {
  }

  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }
}
