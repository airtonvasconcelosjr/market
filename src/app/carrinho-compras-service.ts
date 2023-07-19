import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoComprasService {
  produtos: any[] = [];
  carrinhoAberto = false;

  adicionarProduto(produto: any) {
    const produtoExistente = this.produtos.find(p => p.id === produto.id);
    if (produtoExistente) {
      produtoExistente.quantidade++;
    } else {
      produto.quantidade = 1;
      this.produtos.push(produto);
    }
    console.log('Produto adicionado:', produto);
  }

  getProdutos(): any[] {
    return this.produtos;
  }

  calcularTotal() {
    let total = 0;
    for (const produto of this.produtos) {
      total +=  produto.min_price_valid;
    }
    return total;
  }

  alternarCarrinho() {
    this.carrinhoAberto = !this.carrinhoAberto;
  }

  limparCarrinho(): void {
    this.produtos = []; 
  }
  
}

