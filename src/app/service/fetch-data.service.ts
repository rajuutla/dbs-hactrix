import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/observable/throw';
import {hostname} from '../Shared/hostname';
import { EntryFrom } from '../Shared/EntryFrom';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',    
  })
};

@Injectable()
export class FetchDataService {

  host = hostname;
  private _jsonUrl = "assets/stub.json";

  constructor(private http:HttpClient) { }  

  getData():Observable<any>{
    return this.http.get(this._jsonUrl);
  }

  postData(data:any){
    console.log('dummy data', data);
    this.http.post(this.host, data, httpOptions).subscribe((data:any) => console.log(data));    
  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // return an observable with a user-facing error message
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // };
}
