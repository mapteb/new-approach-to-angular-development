import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { StateManagerComponent } from './state-manager/state-manager.component';
import { ProductsComponent } from './product/products/products.component';

const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'state-manager', component: StateManagerComponent },
  { path: '',   redirectTo: '/state-manager', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
