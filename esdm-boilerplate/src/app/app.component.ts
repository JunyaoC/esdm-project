import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { CoreServiceService } from './core-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(
    private storage: Storage,
    public cs:CoreServiceService
    ) {

  }
}
