import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Banner, Produto, Categoria, Promo } from '../../shared/models';
import { faBolt, faAngleRight, faAngleLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CarrinhoComprasService } from '../../carrinho-compras-service';




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
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  banners!: Banner[];
  categorias!: Categoria[];
  categoriasExibidas: Categoria[] = [];
  quantidadeCategoriasExibidas = 5;
  produtos!: Produto[];
  promo!: Promo[];
  boltIcon = faBolt;
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  faPlus = faPlus;
  


  constructor(
    private apiService: ApiService, 
    private router: Router,
    private carrinhoService: CarrinhoComprasService
    ) {}


  ngOnInit() {
   
    this.apiService.getLayout().subscribe((response: ApiResponse) => {
      console.log(response);
      
      this.banners = response.data.banners;
      this.categorias = response.data.collection_items;
      this.categoriasExibidas = this.categorias.slice(0, this.quantidadeCategoriasExibidas);
      this.promo = response.data.promo;
      this.promo.forEach(item => {
        const price = item.prices[0]?.price;
      });
      this.categorias.forEach(categoria => {
        categoria.items.forEach(item => {
          const price = item.prices[0]?.price; 
          ;
        });
      });
    });
  }
  
  filterByIsDesktop(banners: any[]): any[] {
    return banners.filter(banner => banner.is_desktop);
  }

  adicionarProdutoAoCarrinho(produto: any) {
    this.carrinhoService.adicionarProduto(produto);
  }
  

  slideConfig = {
    slidesToShow: 5.5,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  desktopSlideConfig = {
    slidesToShow: 1,
    slidesToScroll: 2,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  mobileSlideConfig = {
    slidesToShow: 1,
    slidesToScroll: 2,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 1,
  };

  carregarMaisCategorias() {
    this.quantidadeCategoriasExibidas += 5; 
    this.categoriasExibidas = this.categorias.slice(0, this.quantidadeCategoriasExibidas);
  }
}
  
  