import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';

import { CollapseModule } from 'ng2-bootstrap/collapse';

import { SidebarService } from './sidebar.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CollapseModule
  ],
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
  providers: [SidebarService]
})
export class SidebarModule { }
