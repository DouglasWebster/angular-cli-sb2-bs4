import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup.component';

const loginRoutes: Routes = [
    { path: 'signup', component: SignupComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes)
    ],
    exports: [
        RouterModule
    ]

})
export class SignupRoutingModule { }
