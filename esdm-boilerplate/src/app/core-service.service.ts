import { Injectable } from '@angular/core';
import axios from 'axios';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class CoreServiceService {

	server : string = 'http://localhost/php-folder/';

	username : any = ''
	password : any = ''

	currentRole : any = '';
	currentUserData : any;

	public appPages = [
		{ title: 'Home', url: 'home-page', icon: 'paper-plane' },
		{ title: 'Library', url: 'library/browse', icon: 'paper-plane' },
	];

	constructor(
		private router: Router,
		private storage: Storage,
		public toastController: ToastController,
		) {


	}


	login() {

		if(this.username == '') {
			this.presentToast('Please key in your username.', 'danger');
		} else if(this.password == '') {
			this.presentToast('Please key in your password.', 'danger');
		} else {

			console.log('login', this.username, this.password);

			let body = {
				u_username: this.username,
				u_password: this.password,
				action: 'login_user'
			}

			axios.post(this.server + 'user-login.php', JSON.stringify(body)).then((res:any) => {
				console.log(res);

				if(res.data.success) {
					this.currentUserData = res.data.user_data[0];
					this.currentRole = res.data.user_data[0].u_role;
					this.storage.set('storage_xxx', this.currentRole);
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
		this.currentRole = null;
		this.presentToast('Bye Bye... 😥', 'dark');
		this.router.navigate(['/login-page']);
	}

	async presentToast(message:any ,color:any) {
		const toast = await this.toastController.create({
			color: color,
			message: message,
			duration: 2000
		});
		toast.present();
	}

	navigateTo(url:any) {
		this.router.navigate([url]);
	}



}
