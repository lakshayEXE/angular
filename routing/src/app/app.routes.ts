import { Router, RouterModule, Routes } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
export const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'admin', 
    loadComponent: ()=>
      import('./admin/admin.component').then(m => m.AdminComponent)
   },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

//@NgModule({
   // imports : [RouterModule.forRoot(routes)],
  //  exports : [RouterModule]
//})

//export class AppRoutingModule {}