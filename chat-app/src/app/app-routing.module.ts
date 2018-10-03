import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {path:'', component: ProductsComponent},
  {path:'home', component: ProductsComponent},
  {path:'products', component: ProductsComponent},
  {path:'addproduct', component: AddproductComponent},
  {path:'updateproduct/:_id', component: UpdateproductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
