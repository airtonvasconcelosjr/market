import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Banner, Produto, Categoria, Promo } from '../../shared/models';
import $ from 'jquery'; // Importe a biblioteca jQuery
import { faBolt } from '@fortawesome/free-solid-svg-icons';



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
  produtos!: Produto[];
  promo!: Promo[];
  boltIcon = faBolt;
  


  constructor(private apiService: ApiService) {}

  ngOnInit() {
   
    this.apiService.getLayout().subscribe((response: ApiResponse) => {
      console.log(response);
      
      this.banners = response.data.banners;
      this.categorias = response.data.collection_items;
      this.promo = response.data.promo;
      this.promo.forEach(item => {
        const price = item.prices[0]?.price; // Acessar o preço dentro de promo
        console.log(price);
      });
      console.log(this.promo)
      this.categorias.forEach(categoria => {
        categoria.items.forEach(item => {
          const price = item.prices[0]?.price; 
          ;
        });
      });
    });
  }
  

  slideConfig = {
    slidesToShow: 5.5,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    dots: false,
    infinite: true,
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

  
  
  
}
