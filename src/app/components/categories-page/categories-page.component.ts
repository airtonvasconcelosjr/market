import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service'; 
import { Categoria, Promo } from 'src/app/shared/models';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface ApiResponse {
  status: string;
  count: number;
  data: {
    collection_items: Categoria[];
    promo: Promo[];
  };
  http_status: number;
}

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {
  categorias: any[] = [];
  faAngleRight = faAngleRight;
  showAll = false; 


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getLayout().subscribe((response: ApiResponse) => {
      this.categorias = response.data.collection_items;
      console.log(this.categorias);
      for (const categoria of this.categorias) {
        if (Array.isArray(categoria.produtos)) {
          for (const produto of categoria.produtos) {
            console.log(produto.name);
          }
        } else {
          console.log('Categoria sem produtos:', categoria);
        }
      }
    });
  }
  toggleProducts(categoria: any) {
    categoria.showProducts = !categoria.showProducts;
  }
}
