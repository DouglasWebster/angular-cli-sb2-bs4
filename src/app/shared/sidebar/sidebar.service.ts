import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/throw';
// import { HttpClient } from 'selenium-webdriver/http';

@Injectable()
export class SidebarService {

  defaultURL = 'assets/defaultSideMenu.json';
  readError = false;

  constructor(private http: HttpClient) { }

  getMenu(menuUrl = this.defaultURL): Observable<string[]> {
    console.log(`Getting menu from  ${menuUrl}`);
    return this.http.get<string[]>(menuUrl)
      .pipe(
        catchError(this.handleError('getMenu', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message} status: ${error.status}`);
      this.readError = true;

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
