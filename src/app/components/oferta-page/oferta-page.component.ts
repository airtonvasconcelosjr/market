import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Banner, Produto, Categoria, Promo } from '../../shared/models';
import { faBolt, faAngleRight, faAngleLeft, faPlus, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CarrinhoComprasService } from '../../carrinho-compras-service';

interface Post {
  image: string;
  title: string;
  text: string;
}

interface ApiResponse {
  status: string;
  count: number;
  data: {
    banners: Banner[];
    collection_items: Categoria[];
    promo: Promo[]; // Use the new PromoItem interface
  };
  http_status: number;
}


@Component({
  selector: 'app-oferta-page',
  templateUrl: './oferta-page.component.html',
  styleUrls: ['./oferta-page.component.css']
})
export class OfertaPageComponent implements OnInit {
  banners!: Banner[];
  categorias!: Categoria[];
  categoriasExibidas: Categoria[] = [];
  quantidadeCategoriasExibidas = 5;
  promo!: Promo[]; // Use the new PromoItem interface
  produtos: Produto[] = [];
  boltIcon = faBolt;
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  faPlus = faPlus;
  faNewspaper = faNewspaper;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private carrinhoService: CarrinhoComprasService
  ) {}

  ngOnInit() {
    this.apiService.getLayout().subscribe((response: ApiResponse) => {
      this.promo = response.data.promo;
      this.promo.forEach(produto => {
        const price = produto.prices[0]?.price;
        const promoprice = produto.min_price_valid;
        produto.promoprice = promoprice;
      });
     
      console.log( this.promo );
    });
  }


  adicionarProdutoAoCarrinho(produto: any) {
    this.carrinhoService.adicionarProduto(produto);
  }

}
