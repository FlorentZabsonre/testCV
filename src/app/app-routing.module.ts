import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './public/home/home/home.component';


const routes: Routes = [
  { path : 'home' , component: HomeComponent },
  { path: '' , redirectTo: '/home' , pathMatch: 'full' },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
