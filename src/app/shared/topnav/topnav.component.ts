import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

    public topNavCollapsed = true;
    public status: { isopen: boolean } = { isopen: false };
    public items: Array<string> = ['The first choice!',
        'And another choice for you.', 'but wait! A third!'];

    constructor() { }

    ngOnInit() {
    }

    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

}
