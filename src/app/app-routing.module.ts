import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { DashboardModule } from './dashboard/dashboard.module';

// import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        LoginModule,
        SignupModule,
        DashboardModule,
        RouterModule
    ]
})
export class AppRoutingModule { }
