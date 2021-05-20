import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ResourceModalPage } from '../resource-modal/resource-modal.page';
import axios from 'axios';
import { CoreServiceService } from '../../core-service.service';
import { AlertController } from '@ionic/angular';

@Component({
	selector: 'app-browse',
	templateUrl: './browse.page.html',
	styleUrls: ['./browse.page.scss'],
})
export class BrowsePage implements OnInit {

	resourceArray : any;

	constructor(
		public modalController: ModalController,
		public cs:CoreServiceService,
		public alertController: AlertController
	) { }

	ngOnInit() {
		this.fetchResource();
	}

	fetchResource() {
		let body = {
			action: 'read_resource'
		}

		axios.post(this.cs.server + 'library/resource.php', JSON.stringify(body)).then((res:any) => {
			console.log(res);

			if(res.data.success) {
				this.resourceArray = res.data.response;
			} else {

			}

		})
	}

	createResource() {
		this.presentModal({}, 'createResource');
	}

	async presentModal(res:any, opt:any) {
		const modal = await this.modalController.create({
			component: ResourceModalPage,
			cssClass: 'my-custom-class',
			componentProps: {
				resource: res,
				operation: opt
			}
		});

		


		modal.onDidDismiss().then(() => {
			this.fetchResource();
		})
		console.log('dimiss');

		return await modal.present();
		
	}

	downloadResource(res:any) {
		window.open(res.r_file, '_blank');
	}

	editResource(res:any) {
		this.presentModal(res, 'editResource');
	}

	async deleteResource(res:any) {
		const alert = await this.alertController.create({
			cssClass: 'my-custom-class',
			header: 'Delete Alert!',
			message: 'Select Okay to delete the file.',
			buttons: [
			{
				text: 'Cancel',
				role: 'cancel',
				cssClass: 'secondary',
				handler: (blah) => {
					console.log('Confirm Cancel: blah');
				}
			}, {
				text: 'Okay',
				handler: () => {
					console.log('Confirm Okay');

					let body = {
						r_id: res.r_id,
						action: 'delete_resource'
					}

					axios.post(this.cs.server + 'library/resource.php', JSON.stringify(body)).then((res:any) => {
						console.log(res);

						if(res.data.success) {
							this.cs.presentToast('File Deleted.', 'success');
						} else {
							this.cs.presentToast('Something went wrong. Please try again later.', 'danger');
						}

						this.fetchResource();

					})
				}
			}
			]
		});

		await alert.present();

	}



}
