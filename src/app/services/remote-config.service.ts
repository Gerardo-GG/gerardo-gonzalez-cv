import { Injectable } from '@angular/core';
import { fetchAndActivate, getString, RemoteConfig } from '@angular/fire/remote-config';

@Injectable( {
    providedIn: 'root'
} )
export class RemoteConfigService {

    constructor( private remoteConfig: RemoteConfig ) {
    }

    async getConfigValue( key: string ): Promise<string> {
        await fetchAndActivate( this.remoteConfig );
        return getString( this.remoteConfig, key );
    }
}
