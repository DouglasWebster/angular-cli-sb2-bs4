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
import { AccordionSampleComponent } from './bs-components/accordion-sample/accordion-sample.component';
import { AlertSampleComponent } from './bs-components/alert-sample/alert-sample.component';
import { ButtonSampleComponent } from './bs-components/button-sample/button-sample.component';
import { CarouselSampleComponent } from './bs-components/carousel-sample/carousel-sample.component';
import { CollapseSampleComponent } from './bs-components/collapse-sample/collapse-sample.component';
import { DateSampleComponent } from './bs-components/date-sample/date-sample.component';
import { DropdownSampleComponent } from './bs-components/dropdown-sample/dropdown-sample.component';
import { ModalSampleComponent } from './bs-components/modal-sample/modal-sample.component';
import { PaginationSampleComponent } from './bs-components/pagination-sample/pagination-sample.component';
import { PopoverSampleComponent } from './bs-components/popover-sample/popover-sample.component';
import { ProgressSampleComponent } from './bs-components/progress-sample/progress-sample.component';
import { RatingSampleComponent } from './bs-components/rating-sample/rating-sample.component';
import { SortableSampleComponent } from './bs-components/sortable-sample/sortable-sample.component';
import { TabsSampleComponent } from './bs-components/tabs-sample/tabs-sample.component';
import { TimepickerSampleComponent } from './bs-components/timepicker-sample/timepicker-sample.component';
import { TooltipSampleComponent } from './bs-components/tooltip-sample/tooltip-sample.component';
import { TypeaheadSampleComponent } from './bs-components/typeahead-sample/typeahead-sample.component';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'chart', component: ChartingComponent },
            { path: 'tables', component: TablesComponent },
            { path: 'forms', component: FormsComponent },
            { path: 'element', component: BsElementsComponent },
            { path: 'grid', component: GridComponent },
            {
                path: 'components', component: BsComponentsComponent,
                children: [
                   { path: 'accordion', component: AccordionSampleComponent },
                   { path: 'alert', component: AlertSampleComponent},
                   { path: 'button', component: ButtonSampleComponent},
                   { path: 'carousel', component: CarouselSampleComponent},
                   { path: 'collapse', component: CollapseSampleComponent},
                   { path: 'date_picker', component: DateSampleComponent},
                   { path: 'dropdown', component: DropdownSampleComponent},
                   { path: 'modal', component: ModalSampleComponent},
                   { path: 'pagination', component: PaginationSampleComponent},
                   { path: 'popover', component: PopoverSampleComponent},
                   { path: 'progress', component: ProgressSampleComponent},
                   { path: 'ratings', component: RatingSampleComponent},
                   { path: 'sortable', component: SortableSampleComponent},
                   { path: 'tabs', component: TabsSampleComponent},
                   { path: 'timepicker', component: TimepickerSampleComponent},
                   { path: 'tooltip', component: TooltipSampleComponent},
                   { path: 'typeahead', component: TypeaheadSampleComponent}
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ]

})
export class DashboardRoutingModule { }
