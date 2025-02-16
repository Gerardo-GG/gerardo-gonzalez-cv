import { Component } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-modals',
    imports: [
        NgForOf,
        NgIf
    ],
  templateUrl: './modals.component.html',
  styleUrl: './modals.component.css'
})
export class ModalsComponent {
    items: any[] = [];

    constructor(private firestoreService: FirestoreService) {}

    ngOnInit() {
        this.firestoreService.getItems('projects').subscribe(data => {
            this.items = data;
            console.log(this.items);
        });
    }
}
