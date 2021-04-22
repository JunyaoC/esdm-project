import { Component, OnInit } from '@angular/core';
import { CoreServiceService } from '../core-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  constructor(
  	public cs:CoreServiceService,
  ) { }

  ngOnInit() {
  }

}
