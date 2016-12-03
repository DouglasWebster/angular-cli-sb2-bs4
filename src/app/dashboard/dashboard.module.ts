import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DropdownModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';
import { SidebarModule } from '../shared/sidebar/sidebar.module'
import { TopnavModule } from '../shared/topnav/topnav.module';
import { HomeModule } from './home/home.module';
import { ChartingModule } from './charting/charting.module';
import { TablesModule } from './tables/tables.module';
import { FormsModule } from './forms/forms.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DropdownModule,
    ModalModule,
    SidebarModule,
    TopnavModule,
    HomeModule,
    ChartingModule,
    TablesModule,
    FormsModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
