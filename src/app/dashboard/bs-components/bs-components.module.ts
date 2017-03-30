import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BsComponentsComponent } from './bs-components.component';
import { AccordionSampleComponent } from './accordion-sample/accordion-sample.component';
import { AlertSampleComponent } from './alert-sample/alert-sample.component';
import { ButtonSampleComponent } from './button-sample/button-sample.component';
import { CarouselSampleComponent } from './carousel-sample/carousel-sample.component';
import { CollapseSampleComponent } from './collapse-sample/collapse-sample.component';
import { DateSampleComponent } from './date-sample/date-sample.component';
import { DropdownSampleComponent } from './dropdown-sample/dropdown-sample.component';
import { ModalSampleComponent } from './modal-sample/modal-sample.component';
import { PaginationSampleComponent } from './pagination-sample/pagination-sample.component';
import { PopoverSampleComponent } from './popover-sample/popover-sample.component';
import { ProgressSampleComponent } from './progress-sample/progress-sample.component';
import { RatingSampleComponent } from './rating-sample/rating-sample.component';
import { SortableSampleComponent } from './sortable-sample/sortable-sample.component';
import { TabsSampleComponent } from './tabs-sample/tabs-sample.component';
import { TimepickerSampleComponent } from './timepicker-sample/timepicker-sample.component';
import { TooltipSampleComponent } from './tooltip-sample/tooltip-sample.component';
import { TypeaheadSampleComponent } from './typeahead-sample/typeahead-sample.component';

import {
  AccordionModule,
  AlertModule,
  ButtonsModule,
  CarouselModule,
  CollapseModule,
  DatepickerModule,
  BsDropdownModule,
  ModalModule,
  PaginationModule,
  PopoverModule,
  ProgressbarModule,
  RatingModule,
  SortableModule,
  TabsModule,
  TimepickerModule,
  TooltipModule,
  TypeaheadModule
} from 'ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    DatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
  ],
  declarations: [
    BsComponentsComponent,
    AccordionSampleComponent,
    AlertSampleComponent,
    ButtonSampleComponent,
    CarouselSampleComponent,
    CollapseSampleComponent,
    DateSampleComponent,
    DropdownSampleComponent,
    ModalSampleComponent,
    PaginationSampleComponent,
    PopoverSampleComponent,
    ProgressSampleComponent,
    RatingSampleComponent,
    SortableSampleComponent,
    TabsSampleComponent,
    TimepickerSampleComponent,
    TooltipSampleComponent,
    TypeaheadSampleComponent
  ]
})
export class BsComponentModule { }
