import { Component } from '@angular/core';
import { Post } from 'src/app/shared/models';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent {
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
}
