import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { PublicRoutingModule } from './public-routing.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicRoutingModule,

  ]
})
// Le module PublicModule a pour but d'avoir les pages public de l'appli
export class PublicModule { }
