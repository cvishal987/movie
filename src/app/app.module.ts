import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { TrendingmoviesComponent } from './trendingmovies/trendingmovies.component';
import { TicketComponent } from './ticket/ticket.component';
import { FormComponent } from './form/form.component';
import { AddproductsComponent } from './addproducts/addproducts.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ProductsComponent,
    HomeComponent,
    TrendingmoviesComponent,
    TicketComponent,
    FormComponent,
    AddproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
