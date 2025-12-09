export interface Product {
  id: number;
  name: string;
  price: number;
  category: 'women';
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}
