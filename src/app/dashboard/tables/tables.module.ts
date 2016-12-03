import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [TablesComponent],
  exports: [TablesComponent]
})
export class TablesModule { }
