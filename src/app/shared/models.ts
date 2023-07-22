export interface Banner {
    id: string;
    image: string;
    title: string;
    is_mobile: boolean;
    is_desktop: boolean;
    // Outras propriedades do banner, se houver
  }
  
  export interface Produto {
    id: string;
    title: string;
    description: string;
    name:string;
    min_price_valid: number;
    promoprice: number;
    images: string;
    imagem: string;
    slug: string;
    prices: {
      price: number;
    }[];
    items: {
      id: string;
      prices:{
        price: number;
      }
      photo: string;
      image: string;
      images: string;
      name: string;
      min_price_valid: number; // Adicione esta linha para o min_price_valid
      // Outras propriedades do item, se houver
    }[];
    // Outras propriedades do produto, se houver
  }
  
  
  export interface Promo {
    id: string;
    title: string;
    description: string;
    name:string;
    min_price_valid: number;
    promoprice: number;
    images: string;
    imagem: string;
    slug: string;
    prices: {
      price: number;
    }[];
    items: {
      id: string;
      prices: {
        price: number;
      }[];
      photo: string;
      image: string;
      images: string;
      name: string;
      min_price_valid: number; // Adicione esta linha para o min_price_valid
      // Outras propriedades do item, se houver
    }[];
    // Outras propriedades do produto, se houver
  }
  
  

  export interface Categoria {
    id: string;
    title: string;
    description: string;
    items: Produto[]; // Atualize aqui para indicar que items é um array de Produtos
    // Outras propriedades da categoria, se houver
  }

  export interface ApiResponse {
    status: string;
    count: number;
    data: {
      banners: Banner[];
      collection_items: Categoria[];
      promo: Promo[];
    };
    http_status: number;
  }
  
  export interface Post {
    image: string;
    title: string;
    text: string;
  }
  