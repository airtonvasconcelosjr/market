import { Component, OnInit } from '@angular/core';
import { faSearch, faShoppingCart, faUser, faList, faClock, faLocation, faHome, faListAlt, faFire, faAngleDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CarrinhoComprasService } from '../../carrinho-compras-service';

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

  constructor(private carrinhoService: CarrinhoComprasService) { }

  alternarCarrinho() {
    this.carrinhoService.alternarCarrinho();
  }

  abrirCarrinho() {
    this.exibirCarrinho = true;
  }

  fecharCarrinho() {
    this.exibirCarrinho = false;
  }

  ngOnInit() {
    window.addEventListener('scroll', function() {
      var header = document.querySelector('.header');
      var scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        header?.classList.add('fixed');
      } else {
        header?.classList.remove('fixed');
      }
    });
  }
}
