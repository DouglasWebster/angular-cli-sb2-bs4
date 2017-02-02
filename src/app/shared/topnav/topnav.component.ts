import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

    public topNavCollapsed: boolean = true;
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


    /****************************************************
     * the following code is from the original and 
     * seem to be for implementing theme colour changes
     * and swtiching the position of the sidebar.
     * It is not implemented in this version but the code
     * has been left in for completeness
     * **************************************************
     
    changeTheme(color: string): void {
    var link: any = $('<link>');
    link
    .appendTo('head')
    .attr({ type: 'text/css', rel: 'stylesheet' })
    .attr('href', 'themes/app-' + color + '.css');
    }
    
    rtl(): void {
    var body: any = $('body');
    body.toggleClass('rtl');
    }
    
    sidebarToggler(): void {
    var sidebar: any = $('#sidebar');
    var mainContainer: any = $('.main-container');
    sidebar.toggleClass('sidebar-left-zero');
    mainContainer.toggleClass('main-container-ml-zero');
    }*/
}
