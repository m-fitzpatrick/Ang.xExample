import { Injectable } from '@angular/core';
import { Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class ApplicationService {
    // set base url for API here
  private _currentUser:any = null;
  private _requestOptions;
  get currentUser() : any {
    let userAsString = localStorage.getItem('currentUser');
    if (userAsString) {
        return JSON.parse(userAsString);
    }

    return null;
  }

  set currentUser(theUser:any) {
      if (theUser === null || theUser === undefined) {
          localStorage.removeItem('currentUser');
      }
      else {
        localStorage.setItem('currentUser', JSON.stringify(theUser));
      }
  }

  constructor() { 
      
  }
  
  private getRequestOptions = function (){
    let requestOptions = new RequestOptions();
    requestOptions.headers = new Headers({ 'Content-Type': 'application/json' });
    return requestOptions;
  }

  commonValues = {
      baseUrl: 'http://localhost:8082/'
    };

    requestOptions = this.getRequestOptions();
}
