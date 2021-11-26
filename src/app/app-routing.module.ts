import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { StateTransitionsManagerComponent } from './state-transitions-manager/state-transitions-manager.component';
import { ProductsComponent } from './product/products/products.component';
import { ProductComponent } from './product/product/product.component';

const appRoutes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'state-transitions-manager', component: StateTransitionsManagerComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
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
