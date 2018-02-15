import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	personName:string = "Siddhi";

	constructor() { }

	ngOnInit() {
	}

  	formsubmit(value:any){
 		console.log(value);
	}

}
