import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service'; 
import { Categoria, Promo, ApiResponse } from 'src/app/shared/models';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';



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
      for (const categoria of this.categorias) {
        if (Array.isArray(categoria.produtos)) {
          for (const produto of categoria.produtos) {
          }
        } else {
        }
      }
    });
  }
  toggleProducts(categoria: any) {
    categoria.showProducts = !categoria.showProducts;
  }
}
