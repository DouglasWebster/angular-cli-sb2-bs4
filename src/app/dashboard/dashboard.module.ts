import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ModalModule } from 'ng2-bootstrap/modal';
import { SidebarModule } from '../shared/sidebar/sidebar.module';
import { TopnavModule } from '../shared/topnav/topnav.module';
import { HomeModule } from './home/home.module';
import { ChartingModule } from './charting/charting.module';
import { TablesModule } from './tables/tables.module';
import { FormsModule } from './forms/forms.module';
import { BsElementsModule } from './bs-elements/bs-elements.module';
import { GridModule } from './grid/grid.module';
import { BsComponentModule } from './bs-components/bs-components.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    SidebarModule,
    TopnavModule,
    HomeModule,
    ChartingModule,
    TablesModule,
    FormsModule,
    BsElementsModule,
    GridModule,
    BsComponentModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
