import { Component, ViewContainerRef } from '@angular/core';

import { ComponentsHelper } from 'ng2-bootstrap';

// hack to allow 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private viewContainerRef: ViewContainerRef;
  public constructor(viewContainerRef: ViewContainerRef) {

    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;

    this.hackToFixNg221BugForNg2Bootstrap();
  }

  private hackToFixNg221BugForNg2Bootstrap(): void {
    ComponentsHelper.prototype.getRootViewContainerRef = function () {
      // https://github.com/angular/angular/issues/9293
      if (this.root) {
        return this.root;
      }
      let comps = this.applicationRef.components;
      if (!comps.length) {
        throw new Error('ApplicationRef instance not found');
      }
      try {
        /* one more ugly hack, read issue above for details */
        let rootComponent = this.applicationRef._rootComponents[0];
        // this.root = rootComponent._hostElement.vcRef;
        this.root = rootComponent._component.viewContainerRef;
        return this.root;
      } catch (e) {
        throw new Error('ApplicationRef instance not found');
      }
    };
  }
}
