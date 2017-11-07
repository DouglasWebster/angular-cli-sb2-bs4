import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';

import { BsElementsComponent } from './bs-elements.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  declarations: [BsElementsComponent]
})
export class BsElementsModule { }
