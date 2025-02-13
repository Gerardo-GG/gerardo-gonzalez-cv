import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection( { eventCoalescing: true } ),
        provideRouter( routes ),
        provideFirebaseApp( () => initializeApp( {
            apiKey: "AIzaSyC_SCBmXMUgurN3Ar718o3mkzahj4iTAYw",
            authDomain: "gerardo-gonzalez-cv.firebaseapp.com",
            projectId: "gerardo-gonzalez-cv",
            storageBucket: "gerardo-gonzalez-cv.firebasestorage.app",
            messagingSenderId: "487614321162",
            appId: "1:487614321162:web:476ca5c870a6c5ee1dc5f3",
            measurementId: "G-5BYC5DX0Y9"
        } ) ),
        provideRemoteConfig(() => getRemoteConfig()),
        provideAnalytics( () => getAnalytics() ),
        ScreenTrackingService
    ]
};
