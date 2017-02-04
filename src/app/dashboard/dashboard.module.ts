import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { AccordionModule } from 'ng2-bootstrap/accordion';
import { AlertModule } from 'ng2-bootstrap/alert';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { CollapseModule } from 'ng2-bootstrap/collapse';
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
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    DropdownModule.forRoot(),
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
