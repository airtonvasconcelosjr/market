import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { RemoveTagsPipe } from './remove-tags.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { FormsModule } from '@angular/forms';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { OfertaPageComponent } from './components/oferta-page/oferta-page.component';
import { AcouguePageComponent } from './components/acougue-page/acougue-page.component';
import { FriosPageComponent } from './components/frios-page/frios-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RemoveTagsPipe,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ProductPageComponent,
    CategoriesPageComponent,
    CartPageComponent,
    BlogPageComponent,
    OfertaPageComponent,
    AcouguePageComponent,
    FriosPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
