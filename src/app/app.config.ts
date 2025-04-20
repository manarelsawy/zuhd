import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { MegaMenuItem } from 'primeng/api';
import { CarouselModule } from 'ngx-owl-carousel-o';




export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
    BrowserModule,
    importProvidersFrom(CarouselModule ),
    provideAnimations(),
  







  ]
};
