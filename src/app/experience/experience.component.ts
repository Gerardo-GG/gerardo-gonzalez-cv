import { Component } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-experience',
    imports: [
        NgForOf
    ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

    items: any[] = [];

    constructor(private firestoreService: FirestoreService) {}

    ngOnInit() {
        this.firestoreService.getItems('experience').subscribe(data => {
            this.items = data;
            console.log(this.items);
        });
    }

}
