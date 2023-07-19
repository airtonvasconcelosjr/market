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
      this.atualizarValor(produto);
    });
    this.calcularTotalGeral();
  }

  get carrinhoAberto() {
    return this.carrinhoService.carrinhoAberto;
  }

  atualizarValor(produto: any): void {
    if (!produto.quantidade || isNaN(produto.quantidade) || produto.quantidade < 1) {
      produto.quantidade = 1;
    }
    produto.valorTotal = (produto.promoprice * produto.quantidade).toFixed(2);
    this.calcularTotalGeral();
  }

  limparCarrinho() {
    this.produtos = [];
    this.carrinhoService.limparCarrinho();
    this.calcularTotalGeral();
  }

  calcularValorTotal(produto: any): number {
    return produto.promoprice * produto.quantidade;
  }

  calcularTotalGeral(): void {
    this.total = this.produtos.reduce((acc, produto) => {
      return acc + this.calcularValorTotal(produto);
    }, 0);
  }

  adicionarAoCarrinho() {
    const inputElement = document.querySelector('.quantity-input') as HTMLInputElement;
    if (inputElement) {
      const quantidade = parseInt(inputElement.value);
      for (let i = 0; i < quantidade; i++) {
        this.carrinhoService.adicionarProduto(this.produtos[0]); // Exemplo: Adiciona o primeiro produto do array
      }
      this.calcularTotalGeral();
    }
  }
}
