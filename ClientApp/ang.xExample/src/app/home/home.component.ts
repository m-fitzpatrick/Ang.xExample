import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../Services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model;
  constructor(private applicationService: ApplicationService) { 
    this.model = {
      username: '',
      id: '',
      isLoggedIn: false
    };
    let currentUser = applicationService.currentUser;

    if (currentUser) {
      this.model.username = currentUser.token.Username;
      this.model.id = currentUser.token.UserId;
      this.model.isLoggedIn = true;
    }
  }

  ngOnInit() {
  }  
}
