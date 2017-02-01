import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './topnav.component';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CollapseModule } from 'ng2-bootstrap/collapse';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DropdownModule,
    CollapseModule
  ],
  declarations: [TopnavComponent],
  exports: [TopnavComponent]
})
export class TopnavModule { }
