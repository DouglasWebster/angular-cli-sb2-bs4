import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GridComponent } from './grid.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [GridComponent]
})
export class GridModule { }
