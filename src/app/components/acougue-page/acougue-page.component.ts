import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Produto, Categoria, Promo, ApiResponse } from '../../shared/models';
import { faAngleRight, faAngleLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CarrinhoComprasService } from '../../carrinho-compras-service';



@Component({
  selector: 'app-acougue-page',
  templateUrl: './acougue-page.component.html',
  styleUrls: ['./acougue-page.component.css']
})
export class AcouguePageComponent implements OnInit{
    categorias!: Categoria[];
    produtos!: Produto[];
    promo!: Promo[];
    faAngleRight = faAngleRight;
    faAngleLeft = faAngleLeft;
    faPlus = faPlus;
  
    constructor(
      private apiService: ApiService, 
      private carrinhoService: CarrinhoComprasService
      ) {}
  
  
    ngOnInit() {
     
      this.apiService.getLayout().subscribe((response: ApiResponse) => {
        this.categorias = response.data.collection_items;
        console.log(this.categorias[1]);
        this.categorias.forEach(categoria => {
          categoria.items.forEach(produto => {
            const price = produto.prices[0]?.price; 
            const promoprice = produto.min_price_valid;
            produto.promoprice = promoprice;
          });
        });
      });
    }

    adicionarProdutoAoCarrinho(produto: any) {
      this.carrinhoService.adicionarProduto(produto);
    }
}
