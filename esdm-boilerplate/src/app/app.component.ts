import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
import { CoreServiceService } from './core-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(
    private storage: Storage,
    public navCtrl: NavController,
    public cs:CoreServiceService
    ) {

    this.storage.create();
    this.storage.get('storage_xxx').then((res:any) => {

      if(res == null) {
        this.navCtrl.navigateRoot('/login-page');
      } else {
        this.cs.currentRole = res;
        this.navCtrl.navigateRoot('/home-page');
      }
    })

  }
}
