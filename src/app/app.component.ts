import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	loadedFeature = 'recipe';

	ngOnInit() {
		firebase.initializeApp ({
		apiKey: "AIzaSyAPc7c9VqZUgWOYf7VN9wEfPHow-GRzQxU",
    	authDomain: "project-23c7c.firebaseapp.com"
		});
	}
	onNavigate(feature: string) {
		this.loadedFeature = feature;
	}
}
