import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoComprasService {
  produtos: any[] = [];
  carrinhoAberto = false;

  adicionarProduto(produto: any) {
    this.produtos.push(produto);
  }

  calcularTotal() {
    let total = 0;
    for (const produto of this.produtos) {
      total += produto.valor;
    }
    return total;
  }

  alternarCarrinho() {
    this.carrinhoAberto = !this.carrinhoAberto;
  }

}
