import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({ 
      projectId: "gerardo-gonzalez-cv", 
      appId: "1:487614321162:web:476ca5c870a6c5ee1dc5f3", 
      storageBucket: "gerardo-gonzalez-cv.firebasestorage.app", 
      apiKey: "AIzaSyC_SCBmXMUgurN3Ar718o3mkzahj4iTAYw", 
      authDomain: "gerardo-gonzalez-cv.firebaseapp.com", 
      messagingSenderId: "487614321162", 
      measurementId: "G-5BYC5DX0Y9" 
    })), 
    provideAnalytics(() => getAnalytics()), 
    ScreenTrackingService
  ]
};
