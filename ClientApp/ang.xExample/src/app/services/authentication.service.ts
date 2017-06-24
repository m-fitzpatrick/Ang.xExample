import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ApplicationService } from './app.service'
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http, private appService: ApplicationService) { }

  login(username: string, password: string) {
        return this.http.post(this.appService.commonValues.baseUrl +  'api/account/login', 
                                JSON.stringify({ username: username, password: password }),
                                this.appService.requestOptions)
            .map((response: Response) => {
                // login successful if there's a token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and token in local storage to keep user logged in between page refreshes
                    this.appService.currentUser = user;
                }
            });
    }

    logOut() {
        // remove user from local storage to log user out
        this.appService.currentUser = null;
    }
}
