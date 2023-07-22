import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Produto, Categoria, Promo, ApiResponse } from '../../shared/models';
import { faBolt, faAngleRight, faAngleLeft, faPlus, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { CarrinhoComprasService } from '../../carrinho-compras-service';



@Component({
  selector: 'app-oferta-page',
  templateUrl: './oferta-page.component.html',
  styleUrls: ['./oferta-page.component.css']
})
export class OfertaPageComponent implements OnInit {
  categorias!: Categoria[];
  promo!: Promo[]; 
  produtos: Produto[] = [];
  boltIcon = faBolt;
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  faPlus = faPlus;
  faNewspaper = faNewspaper;

  constructor(
    private apiService: ApiService,
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
    });
  }


  adicionarProdutoAoCarrinho(produto: any) {
    this.carrinhoService.adicionarProduto(produto);
  }

}
