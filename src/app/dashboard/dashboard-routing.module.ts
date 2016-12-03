import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { HomeComponent } from './home/home.component';
import { ChartingComponent } from './charting/charting.component';
import { TablesComponent } from './tables/tables.component';
import { FormsComponent } from './forms/forms.component';



const loginRoutes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'chart', component: ChartingComponent },
            { path: 'tables', component: TablesComponent },
            { path: 'forms', component: FormsComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes)
    ],
    exports: [
        RouterModule
    ]

})
export class DashboardRoutingModule { }