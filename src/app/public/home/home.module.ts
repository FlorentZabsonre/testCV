import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { PublicRoutingModule } from "src/app/public/public-routing.module";
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeFeatureCardComponent } from './home-feature-card/home-feature-card.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';

@NgModule({
  declarations: [HomeComponent, HomeBannerComponent, HomeFeatureCardComponent, HomeFeaturesComponent],
  imports: [
    SharedModule,
    PublicRoutingModule
  ]
})
// Ce module s'occupe de la page d'acceuil
export class HomeModule { }