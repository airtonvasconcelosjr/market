import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  productId: string;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.productId = '';
    this.product = null;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.getProductDetails(this.productId);
    });
  }

  getProductDetails(productId: string): void {
    this.apiService.getProductDetails(productId).subscribe(
      (response: any) => {
        this.product = response;
        console.log(response)
      },
      (error: any) => {
        console.error('Erro ao buscar os detalhes do produto:', error);
      }
    );
  }

  // Outros métodos e lógica relacionados à página de detalhes do produto
}
