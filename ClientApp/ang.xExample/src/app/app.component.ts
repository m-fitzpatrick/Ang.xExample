import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { ApplicationService } from './Services/app.service';
import { AuthenticationService } from './Services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private appService: ApplicationService, private authenticationService: AuthenticationService) { 
    
  }

  ngOnInit(): void {
    
  }

  title = 'a Login Example';
  isAuthenticated = function () {
      return this.appService.currentUser != null;
  }

  logOut = function () {
      this.authenticationService.logOut();
      this.router.navigateByUrl('/login');
  }
}
