import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class SidebarService {

  defaultURL = 'assets/defaultSideMenu.json';

  constructor(private http: Http) { }

  getMenu(menuUrl = this.defaultURL): Observable<string[]> {
    console.log('url: ', menuUrl);
    return this.http.get(menuUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    console.log('response: ', res);
    const body = res.json();
    console.log('body: ', body);
    console.log('data: ', body.data);
    return body.data || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    // console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
