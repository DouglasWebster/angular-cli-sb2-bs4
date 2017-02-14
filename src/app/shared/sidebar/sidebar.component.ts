import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public sidebarCollapsed  = true;
  public subMenu1Collapsed  = true;

  public subMenuGlyphUp = 'fa fa-caret-left';
  public subMenuGlyphDown = 'fa fa-caret-down';

  public menuList = [
    { name: 'Dashboard', link: 'home', glyph: 'fa fa-fw fa-dashboard', children: [], collapse: false },
    { name: 'Charts', link: 'chart', glyph: 'fa fa-fw fa-bar-chart-o', children: [], collapse: false },
    { name: 'Tables', link: 'tables', glyph: 'fa fa-fw fa-table', children: [], collapse: false },
    { name: 'Forms', link: 'forms', glyph: 'fa fa-fw fa-edit', children: [], collapse: false },
    { name: 'Elements', link: 'element', glyph: 'fa fa-fw fa-desktop', children: [], subMenuIndex: 0 },
    {
      name: 'Components', link: 'components', glyph: 'fa fa-fw fa-plus', children: [
        { name: 'Accordion', link: 'accordion', glyph: '' },
        { name: 'Alerts', link: 'alert', glyph: '' },
        { name: 'Buttons', link: 'button', glyph: '' },
        { name: 'Carousel', link: 'carousel', glyph: '' },
        { name: 'Collapsed', link: 'collapse', glyph: '' },
        { name: 'Date Picker', link: 'date_picker', glyph: '' },
        { name: 'Dropdowns', link: 'dropdown', glyph: '' },
        { name: 'Modals', link: 'modal', glyph: '' },
        { name: 'Pagination', link: 'pagination', glyph: '' },
        { name: 'Popover', link: 'popover', glyph: '' },
        { name: 'Progress Bar', link: 'progress', glyph: '' },
        { name: 'Ratings', link: 'ratings', glyph: '' },
        { name: 'Sortable', link: 'sortable', glyph: '' },
        { name: 'Tabs', link: 'tabs', glyph: '' },
        { name: 'Time Picker', link: 'timepicker', glyph: '' },
        { name: 'Tooltip', link: 'tooltip', glyph: '' },
        { name: 'Typeahead', link: 'typeahead', glyph: '' }
      ],
      collapse: true
    },
    { name: 'Blank Page', link: 'home', glyph: 'fa fa-fw fa-file-o', children: [], collapse: false },
    { name: 'Dummy Menu', link: 'home', glyph: 'fa fa-fw fa-file-o', children: [
      { name: 'Dummy 1', link: '', glyph: 'fa fa-fw fa-dashboard'},
      { name: 'Dummy 2', link: '', glyph: 'fa fa-fw fa-dashboard'}
    ], collapse: true }

  ];

  constructor() { }

  ngOnInit() {
  }

  eventCalled() {
  }
}

