import { Component } from '@angular/core';
import { CarrinhoComprasService } from 'src/app/carrinho-compras-service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  
  constructor(private carrinhoService: CarrinhoComprasService) { }

  get carrinhoAberto() {
    return this.carrinhoService.carrinhoAberto;
  }
  
  alternarCarrinho() {
    this.carrinhoService.alternarCarrinho();
  }
  produtos: any[] = []; // Declare a propriedade 'produtos' como um array vazio
  calcularTotal(): number {
    // Implemente a função 'calcularTotal' para calcular o valor total dos produtos
    let total = 0;
    for (let produto of this.produtos) {
      total += produto.valor;
    }
    return total;
  }
}
