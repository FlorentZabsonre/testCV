import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule
  ]
})
/* le  role de sharedModule est de centraliser l'importation des composants, des directives et des
* qui sont partagés par différents modules de l'appli
*/
export class SharedModule { }
