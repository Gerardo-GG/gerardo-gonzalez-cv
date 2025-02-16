import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ModalsComponent } from './modals/modals.component';
import { FooterComponent } from './footer/footer.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';

@Component( {
    selector: 'app-root',
    imports: [ RouterOutlet, AboutComponent, ExperienceComponent, ProjectsComponent, ModalsComponent, FooterComponent, EducationComponent, ContactComponent ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
} )
export class AppComponent {
    title = 'gerardo-gonzalez-cv';
}
