import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  AlertModule,
  ButtonsModule,
  DropdownModule,
  PaginationModule,
  ProgressbarModule,
  RatingModule,
  TabsModule,
  TooltipModule,
  ModalModule,
  TypeaheadModule
} from 'ng2-bootstrap';

import { BsComponentsComponent } from './bs-components.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AlertModule,
    ButtonsModule,
    DropdownModule,
    PaginationModule,
    ProgressbarModule,
    RatingModule,
    TabsModule,
    TooltipModule,
    ModalModule,
    TypeaheadModule
  ],
  declarations: [BsComponentsComponent]
})
export class BsComponentModule { }
