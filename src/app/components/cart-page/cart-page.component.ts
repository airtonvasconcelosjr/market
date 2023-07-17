import { Component, OnInit } from '@angular/core';
import { CarrinhoComprasService } from 'src/app/carrinho-compras-service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  produtos: any[] = [];

  constructor(private carrinhoService: CarrinhoComprasService) { }

  ngOnInit() {
    this.produtos = this.carrinhoService.getProdutos();
    console.log('Produtos no carrinho:', this.produtos);
  }

  get carrinhoAberto() {
    return this.carrinhoService.carrinhoAberto;
  }
  
  alternarCarrinho() {
    this.carrinhoService.alternarCarrinho();
  }

  calcularTotal(): number {
    let total = 0;
    for (let produto of this.produtos) {
      total += produto.prices[0].price;
    }
    return total;
  }
}
