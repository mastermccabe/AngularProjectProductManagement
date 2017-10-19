import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component: HomeComponent,
    children:[]
  },
  {
    path:'products',
    pathMatch:'full',
    component: ProductListComponent,
    children:[]
  },
  {
    path:'products/new',
    pathMatch:'full',
    component: ProductCreationComponent,
    children:[]
  },
  {
    path:'products/:id/edit',
    pathMatch:'full',
    component: ProductEditComponent,
    children:[]
  },

  {
  path: '**',

  component: PagenotfoundComponent,
  children:[]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
