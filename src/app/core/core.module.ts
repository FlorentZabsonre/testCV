import { NgModule , Optional , SkipSelf } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
//import { CommonModule } from '@angular/common';
//import { PublicModule } from '../public/public.module';



@NgModule({
  declarations: [NavbarComponent],
  imports: [

  ],
  exports: [NavbarComponent]
})

export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    /*@optional indique qu'une dependance est optionnelle
    Si la dépendancen'est pas donnée alors c'est la valeur null qui est injecté
    @SkipSelf s’applique également sur un paramètre de constructeur. E
    indique au mécanisme d’injection de dépendance d’Angular
    */
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }
}
