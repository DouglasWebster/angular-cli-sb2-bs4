import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BsElementsComponent } from './bs-elements.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [BsElementsComponent]
})
export class BsElementsModule { }
