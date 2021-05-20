import { Component, OnInit, Input } from '@angular/core';
import axios from 'axios';
import { CoreServiceService } from '../../core-service.service';
import { ModalController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
	selector: 'app-resource-modal',
	templateUrl: './resource-modal.page.html',
	styleUrls: ['./resource-modal.page.scss'],
})
export class ResourceModalPage implements OnInit {

	fileBlob : any;
	title : any = "";
	category : any = "";
	author : any = "";
	date : any;

	resourceLength : any;

	@Input('resource') resource : any;
	@Input('operation') operation : any;

	constructor(
		public cs:CoreServiceService,
		public modalController: ModalController,
		private storage: AngularFireStorage
	) { }

	ngOnInit() {
		console.log(this.resource);

		if(this.resource) {
			this.title = this.resource.r_title;
			this.category = this.resource.r_category;
			this.author = this.resource.r_author;
			this.date = this.resource.r_date;
		}

		let body = {
			action: 'count_resource'
		}

		axios.post(this.cs.server + 'library/resource.php', JSON.stringify(body)).then((res:any) => {
			console.log(res);

			if(res.data.success) {
				this.resourceLength = parseInt(res.data.resource_length);
			} else {

			}
		})
	}


	createResource() {

		const filepath = 'esdm_library/' + this.fileBlob.name;

		this.storage.upload(filepath, this.fileBlob).then((res:any) => {

			let url = this.storage.ref(filepath).getDownloadURL();

			url.subscribe( (link:any) => {
				console.log(link);

				const formattedDate = this.date.split('T')[0]; // YYYY-MM-DD
				console.log(formattedDate);

				let body = {
					r_id: String(this.resourceLength+1).padStart(5, "0"),
					r_title: this.title,
					r_category: this.category,
					r_file: link,
					r_author: this.author,
					r_date: formattedDate,
					action: 'create_resource'
				}

				axios.post(this.cs.server + 'library/resource.php', JSON.stringify(body)).then((res:any) => {
					console.log(res);

					if(res.data.success) {
						this.modalController.dismiss();
						this.cs.presentToast('Resource Created!', 'success');
					} else {
						this.modalController.dismiss();
						this.cs.presentToast('Resource Fail to Create!', 'danger');
					}

				})



			});

		})

	}

	uploadFile(event) {

	    if (event.target.value) {
	        const file = event.target.files[0];
	        const type = file.type;
	        if(type != 'application/pdf') {
	        	this.cs.presentToast('Please select a PDF file.', 'danger');
	        	(<HTMLInputElement>document.getElementById("uploadFile")).value = "";

	        } else {
	        	this.fileBlob = file;
	        }
	        
	    } else {
	    	this.cs.presentToast('Please select a PDF file.', 'danger');
	    }
	}


	editResource() {

		const formattedDate = this.date.split('T')[0]; // YYYY-MM-DD

		let body = {
			r_id: this.resource.r_id,
			r_title: this.title,
			r_category: this.category,
			r_author: this.author,
			r_date: formattedDate,
			action: 'edit_resource'
		}

		axios.post(this.cs.server + 'library/resource.php', JSON.stringify(body)).then((res:any) => {
			console.log(res);

			if(res.data.success) {
				this.modalController.dismiss();
				this.cs.presentToast('Resource Edited!', 'success');
			} else {
				this.cs.presentToast('Resource Fail to Edit!', 'danger');
			}
		})
	}


}
