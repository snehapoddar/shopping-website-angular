import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './routes/homepage/homepage.component';
import { ProductComponent } from './routes/product/product.component';
import { LoginComponent } from './routes/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
