import { TestBed, getTestBed, async, fakeAsync, tick, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs/Observable';

import { SidebarService } from './sidebar.service';
import { Subject } from 'rxjs/Subject';

describe('SidebarService', () => {
  let injector: TestBed;
  let service: SidebarService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        SidebarService
      ]
    });
    injector = getTestBed();
    service = injector.get(SidebarService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

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

  // we aren't making any calls so not subscribing to anything so OK to check that it constructs.
  it('should construct', async () => {
    expect(service).toBeDefined();
  });

  it('should issue a request with the default URL', async () => {
    const url = service.defaultURL;
    service.getMenu().subscribe();

    httpMock.expectOne({
      url: this.url,
      method: 'GET'
    });
  });

  it('it should show no error when reading an empty file', async () => {
    const url =  'emptyURL';
    const status = 201;

    service.getMenu(url).subscribe((next) => {
      expect(service.readError).toBeFalsy();
      expect(next).toEqual([]);
    });

    httpMock.expectOne(url).flush([], {status: 201, statusText: 'OK'});
  });

  it('should show no error and return the contents of the file', async () => {
    const url = 'goodURL';
    const errStatus = 201;

    service.getMenu(url).subscribe((next: any) => {
      console.log('next: ', next);
      expect(service.readError).toBeFalsy();
      expect(next).toEqual(mockMenu);
    });

    httpMock.expectOne(url).flush(mockMenu, { status: errStatus, statusText: 'File not found' });
  });

  it('should record the status given a bad url and return an empty object', async () => {
    const url = 'badURL';
    const errStatus = 401;

    service.getMenu(url).subscribe((next) => {
      expect(service.readError).toBeTruthy();
      expect(next).toEqual([]);
    });

    httpMock.expectOne(url).flush(null, { status: errStatus, statusText: 'File not found' });
  });

});
