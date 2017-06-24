import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: any = '/home';
  inerror = false;
  
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.inerror = false;
    this.loading = true;
    
    this.authenticationService.login(this.model.username, this.model.password).subscribe(
                data => {
                    this.router.navigateByUrl(this.returnUrl);
                },
                error => {
                    this.inerror = true;
                    this.loading = false;
                });
  }
}
