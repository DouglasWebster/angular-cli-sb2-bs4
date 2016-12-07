import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FormsComponent]
})
export class FormsModule { }
