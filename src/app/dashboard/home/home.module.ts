import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';

import { HomeComponent } from './home.component';

import { TimelineComponent, ChatComponent, NotificationComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        AlertModule.forRoot(),
        RouterModule
    ],
    declarations: [
        HomeComponent,
        TimelineComponent,
        ChatComponent,
        NotificationComponent
    ],
    exports: [
        HomeComponent,
        TimelineComponent,
        ChatComponent,
        NotificationComponent
    ]
})

export class HomeModule { }
