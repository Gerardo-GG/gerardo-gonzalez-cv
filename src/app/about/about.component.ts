import { Component } from '@angular/core';
import { RemoteConfigService } from '../services/remote-config.service';

@Component( {
    selector: 'app-about',
    imports: [],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
} )
export class AboutComponent {
    cvURL: string = '';
    description: string = '';

    constructor( private remoteConfigService: RemoteConfigService ) {
    }

    ngOnInit() {
        this.runGetParametters()
    }

    async runGetParametters() {
        this.description = await this.remoteConfigService.getConfigValue( 'txt_description' );
        this.cvURL = await this.remoteConfigService.getConfigValue( 'url_cv_english' );
    }
}
