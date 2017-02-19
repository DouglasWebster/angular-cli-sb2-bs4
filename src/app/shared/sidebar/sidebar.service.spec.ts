/* tslint:disable:no-unused-variable */

import { TestBed, async, fakeAsync, tick, inject } from '@angular/core/testing';
import { SidebarService } from './sidebar.service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule, Http, XHRBackend, ResponseOptions, Response, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

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
});

// now we are going to subscribe so mock the http calls.
describe('SidebarService (mocked)', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: Http, useFactory: (backend, options) => {
          return new Http(backend, options);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
        MockBackend,
        BaseRequestOptions,
        SidebarService
      ],
      imports: [HttpModule]
    });
  });

  it('should construct', async(inject([SidebarService, MockBackend], (service: SidebarService, backend: MockBackend) => {
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

    it('should querry current service url', fakeAsync(inject([SidebarService, MockBackend],
      (service: SidebarService, backend: MockBackend) => {

        backend.connections.subscribe(conn => this.lastConnection = conn);
        service.getMenu();

        expect(this.lastConnection).toBeDefined('no http service at all?');
        expect(this.lastConnection.request.url).toMatch('assets/sideMenu.json', 'url invalid');
      })));

    it('should return some menu items', fakeAsync(inject([SidebarService, MockBackend],
      (service: SidebarService, backend: MockBackend) => {

        backend.connections.subscribe(conn => {
          conn.mockRespond((new Response(new ResponseOptions({ body: JSON.stringify(mockMenu) }))));
        });

        let result;
        service.getMenu().subscribe(menu => result = menu);

        const expected = mockMenu.data;

        expect(result.length).toEqual(expected.length, 'should contain given amount of menus');
        expect(result[0].name).toEqual(expected[0].name, 'should contain given menu name');
        expect(result[1].children.length).toEqual(expected[1].children.length, 'submenu should have given amount of children');

      })));
  });
});
