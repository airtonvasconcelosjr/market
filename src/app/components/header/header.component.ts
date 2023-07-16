import { Component, OnInit } from '@angular/core';
import { faSearch, faShoppingCart, faUser, faList, faClock, faLocation, faHome, faListAlt, faFire, faAngleDown } from '@fortawesome/free-solid-svg-icons';

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
