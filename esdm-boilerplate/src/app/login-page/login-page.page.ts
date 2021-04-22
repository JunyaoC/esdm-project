import { Component, OnInit } from '@angular/core';
import { CoreServiceService } from '../core-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  constructor(
  	public cs:CoreServiceService
  ) { }

  ngOnInit() {
  }

}
