import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { products } from './service/products';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { TrendingmoviesComponent } from './trendingmovies/trendingmovies.component';
import { TicketComponent } from './ticket/ticket.component';
import { FormComponent } from './form/form.component';
import { AddproductsComponent } from './addproducts/addproducts.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent  

  },
  {
    path:'checkout',
    component:FormComponent
  },
  
  {
    path:"",
    component:LoginComponent
  },
  {
    path:'user',
    component:NavbarComponent,
    children:[
      {
        path:'products',
        component:ProductsComponent
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'trendingmovies',
        component:TrendingmoviesComponent
      },
      {
        path:'ticket',
        component:TicketComponent
      },
      {
        path:'add',
        component:AddproductsComponent
      }
    
      
      


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
