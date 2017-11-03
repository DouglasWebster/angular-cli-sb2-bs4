/* tslint:disable:no-unused-variable */

import { TestBed, getTestBed, async, fakeAsync, tick, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule, Http, XHRBackend, ResponseOptions, Response, BaseRequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { SidebarService } from './sidebar.service';

// we aren't making any calls so not subscribing to anything so OK to check that it constructs.
describe('SidebarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SidebarService
      ],
      imports: [
        HttpModule
      ]
    });
  });

  it('should construct', async(inject([SidebarService], (service) => {
    expect(service).toBeDefined();
  })));

  it('should throw an error when given a bad url', async(inject([SidebarService], (service) => {
    expect(() => service.getMenu('badUrl').subsribe()).toThrowError();
  })));

});

// now we are going to subscribe so mock the http calls.
describe('SidebarService (mocked)', () => {
  let mockBackend: MockBackend;

  // All heed this block - it is required so that the test injector
  // is properly set up. Without doing this, you won't get the
  // fake backend injected into Http.

  // Also, you need to inject MockBackend as a provider before you wire
  // it to replace XHRBackend with the provide function!  So this is all
  // extremely important to set up right.
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        HttpModule
      ]
    });
    mockBackend = getTestBed().get(MockBackend);
  }));

  it('should construct', async(inject([SidebarService /*, MockBackend */], (service: SidebarService /*, backend: MockBackend */) => {
    expect(service).toBeTruthy();
  })));

  describe('getMenu', () => {
    const mockMenu = {
      'data': [
        { name: 'Blank Page', link: 'home', glyph: 'fa fa-fw fa-file-o', children: [], collapse: false },
        {
          name: 'Dummy Menu', link: 'home', glyph: 'fa fa-fw fa-file-o', children: [
            { name: 'Dummy 1', link: '', glyph: 'fa fa-fw fa-dashboard' },
            { name: 'Dummy 2', link: '', glyph: 'fa fa-fw fa-dashboard' }
          ], collapse: true
        }
      ]
    };

    it('should querry current service url', async(inject([SidebarService/*, MockBackend*/],
      (service: SidebarService/*, mockBackend: MockBackend*/) => {

        mockBackend.connections.subscribe(conn => this.lastConnection = conn);
        service.getMenu();

        expect(this.lastConnection).toBeDefined('no http service at all?');
        expect(this.lastConnection.request.url).toMatch(service.defaultURL, 'url invalid');
      })));

    it('should throw an error if the json file is empty', async(inject([SidebarService/*, MockBackend*/],
      (service: SidebarService/*, mockBackend: MockBackend*/) => {
        mockBackend.connections.subscribe((conn: MockConnection) => {
          conn.mockRespond((new Response(new ResponseOptions({ body: '' }))));
        });
        expect(() => service.getMenu().subscribe()).toThrow('Unexpected end of JSON input');
      }))
    );

    it('should return some menu items', async(inject([SidebarService/*, MockBackend*/],
      (service: SidebarService/*, mockBackend: MockBackend*/) => {

        mockBackend.connections.subscribe((conn: MockConnection) => {
          conn.mockRespond((new Response(new ResponseOptions({ body: JSON.stringify(mockMenu) }))));
        });

        let result;
        service.getMenu().subscribe(menu => result = menu);
        // console.log('menu returned: ', result);

        const expected = mockMenu.data;

        expect(result.length).toEqual(expected.length, 'should contain given amount of menus');
        expect(result[0].name).toEqual(expected[0].name, 'should contain given menu name');
        expect(result[1].children.length).toEqual(expected[1].children.length, 'submenu should have given amount of children');

      })));
  });
});
