import { Component, Directive, Injectable, Input } from '@angular/core';
import { NavigationExtras } from '@angular/router';

import { RouterLinkStubDirective, RouterOutletStubComponent, RouterStub, Router } from './router-stubs';

import { NgModule } from '@angular/core';

@NgModule({
    imports: [],
    exports: [RouterLinkStubDirective],
    declarations: [RouterOutletStubComponent, RouterLinkStubDirective],
    providers: [],
})
export class RouterOutlesStubModule { }
