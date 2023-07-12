import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Banner, Produto, Categoria } from './shared/models';

interface ApiResponse {
  status: string;
  count: number;
  data: {
    banners: Banner[];
    collection_items: Categoria[];
  };
  http_status: number;
}

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent implements OnInit {
    banners!: Banner[];
    categorias!: Categoria[];
    produtos!: Produto[];

    constructor(private apiService: ApiService) {}

    ngOnInit() {
      this.apiService.getLayout().subscribe((response: ApiResponse) => {
        console.log(response);
        this.banners = response.data.banners;
        this.categorias = response.data.collection_items;
        this.categorias.forEach(categoria => {
          categoria.items.forEach(item => {
            console.log(item);
          });
        });
      });
    }
    
  }