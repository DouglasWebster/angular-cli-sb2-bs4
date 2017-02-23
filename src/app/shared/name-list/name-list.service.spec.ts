import { Injectable, ReflectiveInjector } from '@angular/core';
import { async, fakeAsync, tick } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Observable } from 'rxjs/Rx';


const nameData = {
  data: [
    'Edsger Dijkstra',
    'Donald Knuth',
    'Alan Turing',
    'Grace Hopper'
  ]
};

@Injectable()
class NameListService {
  constructor(private http: Http) { }

  get(): Observable<String[]> {
    return this.http.get('assets/data.json')
      .map((res: Response) => res.json().data)
      .catch(e => this.handleError(e));
  }
  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

describe('NameListService (mocked)', () => {
  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      { provide: ConnectionBackend, useClass: MockBackend },
      { provide: RequestOptions, useClass: BaseRequestOptions },
      Http,
      NameListService,
    ]);

    this.nameListService = this.injector.get(NameListService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });

  it('get() should query current service url', () => {
    this.nameListService.get();
    expect(this.lastConnection).toBeDefined('no http service connection at all?');
    expect(this.lastConnection.request.url).toMatch(/assets\/data.json$/, 'url invalid');
  });

  it('get() should return some names if url O.K.', fakeAsync(() => {
    let result: String[];

    this.nameListService.get().subscribe(
      list => {
        result = list;
      },
      error => {
        this.errorMessage = <any>error;
        console.error('error getting data: ', this.errorMessage);
      },
      () => { }
    );

    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(nameData),
    })));

    tick();
    expect(result.length).toEqual(4, 'should contain given amount of heroes');
    expect(result[0]).toEqual(nameData.data[0], `${nameData.data[0]} should be the first name`);
    expect(result[3]).toEqual(nameData.data[3], `${nameData.data[3]} should be the third name`);
  }));

  it('get() should not get names but give error while server is down', fakeAsync(() => {
    let result: String[];
    let catchedError: any;

    this.nameListService.get().subscribe(
      list => {
        result = list;
      },
      error => {
        catchedError = <any>error;
      },
      () => { }
    );

    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      status: 404,
      statusText: 'URL not Found',
    })));

    tick();

    expect(result).toBeUndefined();
    expect(catchedError).toBeDefined();
  }));
});
