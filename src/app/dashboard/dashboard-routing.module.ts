import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { HomeComponent } from './home/home.component';
import { ChartingComponent } from './charting/charting.component';
import { TablesComponent } from './tables/tables.component';
import { FormsComponent } from './forms/forms.component';
import { BsElementsComponent } from './bs-elements/bs-elements.component';
import { GridComponent } from './grid/grid.component';
import { BsComponentsComponent } from './bs-components/bs-components.component';



const loginRoutes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'chart', component: ChartingComponent },
            { path: 'tables', component: TablesComponent },
            { path: 'forms', component: FormsComponent},
            { path: 'element', component: BsElementsComponent},
            { path: 'grid', component: GridComponent},
            { path: 'components', component: BsComponentsComponent}
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
