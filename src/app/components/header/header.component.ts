import { Component, OnInit } from '@angular/core';
import { faSearch, faShoppingCart, faUser, faList, faClock, faLocation, faHome, faListAlt, faFire, faAngleDown, faTimes, faAngleLeft, faTags, faDrumstickBite, faCheese } from '@fortawesome/free-solid-svg-icons';
import { CarrinhoComprasService } from '../../carrinho-compras-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchIcon = faSearch;
  faShoppingCart = faShoppingCart;
  faUser = faUser;
  faList = faList;
  faClock = faClock;
  faLocation = faLocation;
  faHome = faHome;
  faListAlt = faListAlt;
  faFire = faFire;
  faAngleDown = faAngleDown;
  faTimes = faTimes;
  exibirCarrinho = false;
  faAngleLeft = faAngleLeft;
  faTags = faTags;
  faDrumstickBite = faDrumstickBite ;
  faCheese = faCheese;
  formattedToday!: string;
  formattedTomorrow!: string;
  termoPesquisa: string = '';

  constructor(
      private carrinhoService: CarrinhoComprasService,
      private router: Router
    ) { }

  alternarCarrinho() {
    this.carrinhoService.alternarCarrinho();
  }

  abrirCarrinho() {
    this.exibirCarrinho = true;
  }

  fecharCarrinho() {
    this.exibirCarrinho = false;
  }

  getCarrinhoItemCount(): number {
    return this.carrinhoService.getProdutos().length;
  }

  getFormattedDate(date: Date): string {
    const options = {
      weekday: 'long' as const,
      month: 'long' as const,
      day: 'numeric' as const
    };
    return date.toLocaleDateString('pt-BR', options);
  }


  ngOnInit() {
    window.addEventListener('scroll', () => {
      var header = document.querySelector('.header');
      var scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        header?.classList.add('fixed');
      } else {
        header?.classList.remove('fixed');
      }
    });

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    
    this.formattedToday = this.getFormattedDate(today); 
    this.formattedTomorrow = this.getFormattedDate(tomorrow); 
  }
}
