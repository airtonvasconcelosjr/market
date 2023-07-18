import { Component, OnInit } from '@angular/core';
import { CarrinhoComprasService } from '../../carrinho-compras-service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  produtos: any[] = [];
  total: number = 0;

  constructor(private carrinhoService: CarrinhoComprasService) { }

  ngOnInit() {
    this.produtos = this.carrinhoService.getProdutos();
    console.log('Produtos no carrinho:', this.produtos);
    this.produtos.forEach(produto => {
      produto.quantidade = 1;
      this.atualizarValor(produto); // Chama a função atualizarValor para calcular o valor total inicial
      this.atualizarTotal();
    });
  }
  

  get carrinhoAberto() {
    return this.carrinhoService.carrinhoAberto;
  }
  
  alternarCarrinho() {
    this.carrinhoService.alternarCarrinho();
  }

  atualizarTotal(): void {
    this.total = this.produtos.reduce((acc, produto) => {
      return acc + (produto.min_price_valid * produto.quantidade);
    }, 0);
  }

  atualizarValor(produto: any): void {
    if (!produto.quantidade || isNaN(produto.quantidade) || produto.quantidade < 1) {
      produto.quantidade = 1;
    }
    produto.valorTotal = (produto.min_price_valid * produto.quantidade).toFixed(2);
    this.atualizarTotal();
  }

  limparCarrinho(): void {
    this.produtos = []; // Zera o array de produtos
    this.total = 0; // Zera o valor total
  }
  
  
}
