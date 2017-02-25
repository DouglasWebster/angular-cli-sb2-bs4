/* tslint:disable:no-unused-variable */
import { HttpModule, ResponseOptions, Response, ResponseType, RequestMethod, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule } from '@angular/router';

import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Observable } from 'rxjs/Rx';

import { CollapseModule } from 'ng2-bootstrap/collapse';
import { SidebarComponent } from './sidebar.component';

import { SidebarService } from './sidebar.service';

const mockMenu = {
  'data': [
    {
      'name': 'Elements', 'link': 'element', 'glyph': 'fa fa-fw fa-desktop', 'children': [], 'subMenuIndex': 0
    },
    {
      'name': 'Components', 'link': 'components', 'glyph': 'fa fa-fw fa-plus', 'children': [
        { 'name': 'Popover', 'link': 'popover', 'glyph': '' },
        { 'name': 'Progress Bar', 'link': 'progress', 'glyph': '' },
        { 'name': 'Ratings', 'link': 'ratings', 'glyph': '' }
      ], 'collapse': true
    }
  ]
};

class MockError extends Response implements Error {
  name: any;
  message: any;
}

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let debugEl: DebugElement;

  let mockBackend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SidebarComponent
      ],
      providers: [
        SidebarService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
          (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ],
      imports: [
        HttpModule,
        RouterTestingModule,
        RouterModule,
        CollapseModule.forRoot()
      ]
    });

    TestBed.compileComponents();
  }));

  function mockBackendFunctions(testBed: TestBed) {
    mockBackend = testBed.get(MockBackend);
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        // TODO - simplify - when match fails it is null
        console.log(`in the mockBackendFunctions with /${connection.request.url}/ of length ${connection.request.url.length}`);

        const isGoodUrl = connection.request.url &&
          connection.request.method === RequestMethod.Get &&
          connection.request.url.match(/goodUrl/) &&
          connection.request.url.match(/goodUrl/).length === 1 ? true : false;

        const isEmptyUrl = connection.request.method === RequestMethod.Get &&
          connection.request.url.length === 0 ? true : false;

        const isBadUrl = connection.request.url &&
          connection.request.method === RequestMethod.Get &&
          connection.request.url.match(/badUrl/) &&
          connection.request.url.match(/badUrl/).length === 1 ? true : false;

        const isBadData = connection.request.url &&
          connection.request.method === RequestMethod.Get &&
          connection.request.url.match(/badData/) &&
          connection.request.url.match(/badData/).length === 1 ? true : false;

        if (isGoodUrl || isEmptyUrl) {
          console.log(`Mock Backend Funtions called with `, isGoodUrl ? 'Good Url' : 'Empty Url');
          connection.mockRespond(new Response(
            new ResponseOptions({
              body: JSON.stringify(mockMenu)
            })
          ));
        }

        if (isBadUrl) {
          console.log(`Mock Backend Funtions called with Bad Url`);
          const body = JSON.stringify({ body: 'msg: Bad url' });
          const opts = { type: ResponseType.Error, status: 404, body: body };
          const responseOpts = new ResponseOptions(opts);
          connection.mockError(new MockError(responseOpts));
        }

        if (isBadData) {
          console.log(`Mock Backend Funtions called with Bad Data`);

          connection.mockRespond(new Response(
            new ResponseOptions({
              body: ''
            })
          ));
        }
      }
    );
  }


  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
    const testBed = getTestBed();
    mockBackendFunctions(testBed);

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('with the hard coded items', () => {
    const deflistLength = component.hardCodedItems.length;
    const defFirstName = component.hardCodedItems[0].name;
    const compListLength = component.menuList.length;
    const compFirstName = component.menuList[0].name;
    expect(compListLength).toEqual(deflistLength, 'menu list not instantiated correctly');
    expect(compFirstName).toEqual(defFirstName, `first item name doesn't equal ${defFirstName}`);
  });

  describe('should create the menu with just the hard coded items', () => {
    it('when subscribed to with a bad url', () => {
      fixture.detectChanges();
      console.log('calling getMenu with bad Url');
      component.getMenu('badUrl');

      const deflistLength = component.hardCodedItems.length;
      const defFirstName = component.hardCodedItems[0].name;
      const compListLength = component.menuList.length;
      const compFirstName = component.menuList[0].name;
      expect(compListLength).toEqual(deflistLength, 'menu list not instantiated correctly');
      expect(compFirstName).toEqual(defFirstName, `first item name doesn't equal ${defFirstName}`);
    });

    it('when a corrupt json file is returned', () => {
      fixture.detectChanges();
      console.log('calling getMenu');
      component.getMenu('badData');

      const deflistLength = component.hardCodedItems.length;
      const defFirstName = component.hardCodedItems[0].name;
      const compListLength = component.menuList.length;
      const compFirstName = component.menuList[0].name;
      expect(compListLength).toEqual(deflistLength, 'menu list not instantiated correctly');
      expect(compFirstName).toEqual(defFirstName, `first item name doesn't equal ${defFirstName}`);
    });

  });

  describe('should create the menu with combined hard coded items and remote items', () => {
    it('when subscribed to with a goodUrl', () => {
      fixture.detectChanges();
      console.log('calling getMenu');
      component.getMenu('goodUrl');

      const combListLength = component.hardCodedItems.length + mockMenu.data.length;
      const combFirstName = mockMenu.data[0].name;
      const compListLength = component.menuList.length;
      const compFirstName = component.menuList[0].name;
      expect(compListLength).toEqual(combListLength, 'menu list not instantiated correctly');
      expect(compFirstName).toEqual(combFirstName, `first item name doesn't equal ${combFirstName}`);
    });

    it('when subscribed to with an empty url', () => {
      fixture.detectChanges();
      console.log('calling getMenu');
      component.getMenu('');

      const combListLength = component.hardCodedItems.length + mockMenu.data.length;
      const combFirstName = mockMenu.data[0].name;
      const compListLength = component.menuList.length;
      const compFirstName = component.menuList[0].name;
      expect(compListLength).toEqual(combListLength, 'menu list not instantiated correctly');
      expect(compFirstName).toEqual(combFirstName, `first item name doesn't equal ${combFirstName}`);
    });

  });


});
