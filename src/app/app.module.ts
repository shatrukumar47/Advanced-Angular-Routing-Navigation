import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ProductPageComponent } from './component/product-page/product-page.component';
import { ProductDetailPageComponent } from './component/product-detail-page/product-detail-page.component';
import { AdminPageComponent } from './component/admin-page/admin-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './component/about-page/about-page.component';
import { CardProductComponent } from './component/card-product/card-product.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './component/loader/loader.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { SignupPageComponent } from './component/signup-page/signup-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const appRoutes:Routes = [
  {path: "", component: HomePageComponent},
  {path: "user/admin", component: AdminPageComponent},
  {path: "about", component: AboutPageComponent},
  {path: "login", component: LoginPageComponent},
  {path: "register", component: SignupPageComponent},
  {path: "products", component: ProductPageComponent},
  { path: 'products/:id', component: ProductDetailPageComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductDetailPageComponent,
    AdminPageComponent,
    AboutPageComponent,
    CardProductComponent,
    LoaderComponent,
    LoginPageComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
