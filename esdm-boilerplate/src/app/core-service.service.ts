import { Injectable } from '@angular/core';
import axios from 'axios';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CoreServiceService {

	server: string = 'http://localhost/php-folder/';

	username: any = ''
	password: any = ''

	currentRole: any = '';
	currentUserData: any;

	initSub:any

	public appPages = [
		{ title: 'Home', url: 'home-page', icon: 'paper-plane' },
		{ title: 'Library', url: 'library-browse', icon: 'paper-plane' },
		{ title: 'Attendance', url: 'attendance', icon: 'paper-plane' },
		{ title: 'Dining', url: 'dining', icon: 'paper-plane' },
	];

	constructor(
		private router: Router,
		private storage: Storage,
		public toastController: ToastController,
		public navCtrl: NavController,
	) {

		this.storage.create();

		this.initSub = new Observable(subscriber => {
			
			let p1 = this.storage.get('storage_xxx').then((res: any) => {

				if (res == null) {
					this.navCtrl.navigateRoot('/login-page');
				} else {
					this.currentRole = res;
					this.navCtrl.navigateRoot('/attendance');
				}
			})

			let p2 = this.storage.get('userData').then((res: any) => {
				if (res) {
					this.currentUserData = res;
				}

			})

			Promise.all([p1,p2]).then( () => {
				subscriber.next(true);
    			subscriber.complete();
			})

		});



	}


	login() {

		if (this.username == '') {
			this.presentToast('Please key in your username.', 'danger');
		} else if (this.password == '') {
			this.presentToast('Please key in your password.', 'danger');
		} else {

			console.log('login', this.username, this.password);

			let body = {
				u_username: this.username,
				u_password: this.password,
				action: 'login_user'
			}

			axios.post(this.server + 'user-login.php', JSON.stringify(body)).then((res: any) => {
				console.log(res);

				if (res.data.success) {
					this.currentUserData = res.data.user_data[0];
					this.currentRole = res.data.user_data[0].u_role;
					this.storage.set('storage_xxx', this.currentRole);
					this.storage.set('userData', this.currentUserData);
					this.presentToast('Welcome to ESDM Boilderplate! 😁', 'success');
					this.router.navigate(['/home-page']);
				} else {
					this.presentToast('Wrong username or password.', 'danger');
				}

			})

		}
	}

	logout() {
		this.storage.set('storage_xxx', null);
		this.storage.set('userData', null);
		this.currentRole = null;
		this.presentToast('Bye Bye... 😥', 'dark');
		this.router.navigate(['/login-page']);
	}

	async presentToast(message: any, color: any) {
		const toast = await this.toastController.create({
			color: color,
			message: message,
			duration: 2000
		});
		toast.present();
	}

	navigateTo(url: any) {
		this.router.navigate([url]);
	}



}
