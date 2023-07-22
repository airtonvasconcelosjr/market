import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { OfertaPageComponent } from './components/oferta-page/oferta-page.component';
import { AcouguePageComponent } from './components/acougue-page/acougue-page.component';
import { FriosPageComponent } from './components/frios-page/frios-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'product/:slug', component: ProductPageComponent },
  { path: 'categorias', component: CategoriesPageComponent },
  { path: 'ofertas', component: OfertaPageComponent },
  { path: 'acougue', component: AcouguePageComponent },
  { path: 'frios', component: FriosPageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
