import { Component } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { NgForOf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-projects',
    imports: [
        NgForOf,
        NgStyle
    ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    items: any[] = [];

    constructor(private firestoreService: FirestoreService) {}

    ngOnInit() {
        this.firestoreService.getItems('projects').subscribe(data => {
            this.items = data;
            console.log(this.items);
        });

        // this.firestoreService.importData()
    }
}
