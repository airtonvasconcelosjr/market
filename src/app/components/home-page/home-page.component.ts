import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Banner, Produto, Categoria, Promo } from '../../shared/models';
import { faBolt, faAngleRight, faAngleLeft, faPlus, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CarrinhoComprasService } from '../../carrinho-compras-service';


interface Post {
  image: string;
  title: string;
  text: string;
}

interface ApiResponse {
  status: string;
  count: number;
  data: {
    banners: Banner[];
    collection_items: Categoria[];
    promo: Promo[];
  };
  http_status: number;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  banners!: Banner[];
  categorias!: Categoria[];
  categoriasExibidas: Categoria[] = [];
  quantidadeCategoriasExibidas = 5;
  produtos!: Produto[];
  promo!: Promo[];
  boltIcon = faBolt;
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  faPlus = faPlus;
  faNewspaper = faNewspaper;
  posts: Post[] = [
    {
      image: '../../../assets/images/coco.jpeg',
      title: 'Benefícios da água de coco',
      text: 'A propriedade antienvelhecimento da água de coco é devida a substâncias antioxidantes como, vitamina C, complexo B e o aminoácido arginina. A principal ação dos antioxidantes é diminuir os malefícios dos radicais livres produzidos na célula, a que estamos expostos diariamente, contribuindo no retardo do envelhecimento precoce. 💆‍♀️'
    },
    {
      image: '../../../assets/images/cerveja.jpeg',
      title: 'Truques para gelar a cerveja',
      text: "'Truques para gelar a cerveja:      Com guardanapo molhado: envolva cada garrafa ou latinha um guardanapo e mergulhe na água depois deixe no freezer por 5 minutos      Rotacione a latinha por 2 minutos na água gelada         Organize seu cooler para gelar mais Sal e álcool no gelo: Para cada saco de 1kg de gelo, adicione 500g de sal refinado e mais 500mL de álcool. Mise deixe sua cerveja por 3 minutos'"
    },
    {
      image: '../../../assets/images/vegetais.jpeg',
      title: 'Higienização correta dos alimentos em tempo de pandemia.',
      text: 'A higienização dos alimentos é sempre importante, mas neste momento de pandemia tornou-se mais necessária. Além de lavar muito bem as mãos, infectologistas recomendam lavar todas as frutas e hortaliças antes mesmo de serem armazenadas na geladeira. '
    }
  ];
  


  constructor(
    private apiService: ApiService, 
    private router: Router,
    private carrinhoService: CarrinhoComprasService
    ) {}


  ngOnInit() {
   
    this.apiService.getLayout().subscribe((response: ApiResponse) => {
      this.banners = response.data.banners;
      this.categorias = response.data.collection_items;
      this.categoriasExibidas = this.categorias.slice(0, this.quantidadeCategoriasExibidas);
      this.promo = response.data.promo;
      this.promo.forEach(produto => {
        const price = produto.prices[0]?.price;
        const promoprice = produto.min_price_valid;
        produto.promoprice = promoprice;
      });
      this.categorias.forEach(categoria => {
        categoria.items.forEach(produto => {
          const price = produto.prices[0]?.price; 
          const promoprice = produto.min_price_valid;
          produto.promoprice = promoprice;
        });
      });
    });
  }
  
  filterByIsDesktop(banners: any[]): any[] {
    return banners.filter(banner => banner.is_desktop);
  }

 adicionarProdutoAoCarrinho(produto: any) {
  this.carrinhoService.adicionarProduto(produto);
}
  

  slideConfig = {
    slidesToShow: 5.5,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  desktopSlideConfig = {
    slidesToShow: 1,
    slidesToScroll: 2,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  mobileSlideConfig = {
    slidesToShow: 1,
    slidesToScroll: 2,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 1,
  };

  carregarMaisCategorias() {
    this.quantidadeCategoriasExibidas += 5; 
    this.categoriasExibidas = this.categorias.slice(0, this.quantidadeCategoriasExibidas);
  }
}
  
  