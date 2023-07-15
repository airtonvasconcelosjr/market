import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Banner, Categoria, Promo } from '../../shared/models';
import { faTrash, faAngleLeft, faAngleRight, faPlus } from '@fortawesome/free-solid-svg-icons';


interface ApiResponse {
  status: string;
  count: number;
  data: {
    banners: Banner[];
    collection_items: Categoria[];
    promo: Promo[];
  };
  http_status: number;
}

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  slug?: string;
  product: any;
  categorias!: Categoria[];
  categoriaTitle: string | undefined;
  faTrash = faTrash;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faPlus = faPlus;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  findCategoriaBySlug(slug: string): Categoria | undefined {
  return this.categorias.find((categoria: Categoria) =>
    categoria.items.some((item) => item.slug === slug)
  );
}

ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.slug = params['slug'];
    this.getProductDetails();
  });

  this.apiService.getLayout().subscribe((response: ApiResponse) => {
    this.categorias = response.data.collection_items;
    if (this.slug) {
      const categoria = this.findCategoriaBySlug(this.slug);

      if (categoria) {
        this.categoriaTitle = categoria.title;
      }
    }
  });
}


  getProductDetails(): void {
    if (this.slug) {
      this.apiService.getProductDetails(this.slug).subscribe(
        (response: any) => {
          const productData = response.data[0];
          this.product = {
            name: productData.name,
            description: productData.description,
            price: productData.prices[0]?.price,
            promo: productData.min_price_valid,
            images: productData.images,
            brand: productData.brand,
          };
         console.log( productData.brand)
        },
        (error: any) => {
        }
      );
    }
  }

  // Incrementar o valor do input de 1 em 1
incrementInput() {
  const inputElement = document.querySelector('.quantity-input') as HTMLInputElement;
  if (inputElement) {
    inputElement.value = (parseInt(inputElement.value) + 1).toString();
  }
}

// Resetar o valor do input para 0
resetInput() {
  const inputElement = document.querySelector('.quantity-input') as HTMLInputElement;
  if (inputElement) {
    inputElement.value = '0';
  }
}


  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    dots: false,
    infinite: false,
  };
  
  
}  
