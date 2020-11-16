import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetencesComponent } from './competences/competences.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from './core/core.module';
import { HomeBannerComponent } from './public/home/home-banner/home-banner.component';
import { HomeComponent } from './public/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetencesComponent,
    ExperiencesComponent,
    HomeBannerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CoreModule
  ],
  exports: [
    HomeBannerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }