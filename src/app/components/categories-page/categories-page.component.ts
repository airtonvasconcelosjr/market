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

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getLayout().subscribe((response: ApiResponse) => {
      this.categorias = response.data.collection_items.map(item => item.title);
      console.log(this.categorias);
      console.log(response);
    });
  }
  
}
