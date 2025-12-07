import type { Product } from '../types';
import bomberJacket from '../assets/bomberJacket.png';
import peplumTop from '../assets/peplumTop.png';
import redJumpsuit from '../assets/redJumpsuit.png';
import greenAnkara from '../assets/greenAnkara.png';
import pantSet from '../assets/pantSet.png';
import romperSet from '../assets/romperSet.png';
import blazer from '../assets/blazer.png';
import skirt from '../assets/skirt.png';
import romperJacketSet from '../assets/romperJacketSet.png';
import pantSuit from '../assets/pantSuit.png';
import dressJacketSet from '../assets/dressJacketSet.png';
import blazer2 from '../assets/blazer2.png';
import pantSuit2 from '../assets/pantSuit2.png';
import skirt2 from '../assets/skirt2.png';
import pantSuit3 from '../assets/pantSuit3.png';    
import dressBlazer from '../assets/dressBlazer.png';

export const products: Product[] = [
  // Women's Collection
    {
    id: 1,
    name: 'Dress Blazer Set',
    price: 199.99,
    category: 'women',
    image: dressBlazer,
    description: 'Dress and a matching tailored blazer made from colorful Ankara fabric',
  }
  ,
  {
    id: 2,
    name: 'Romper Set',
    price: 189.99,
    category: 'women',
    image: romperSet,
    description: 'Elegant Blue Ankara Romper Set',
  }
  ,
  {
    id: 3,
    name: 'Dress Jacket Set',
    price: 199.99,
    category: 'women',
    image: dressJacketSet,
    description: 'Elegant Ankara Dress Jacket Set',
  }
  ,
  {
    id: 4,
    name: 'Green Dress Set',
    price: 189.99,
    category: 'women',
    image: greenAnkara,
    description: 'Elegant green Ankara dress set',
  },
    {
    id: 5,
    name: 'Red Pant Set',
    price: 189.99,
    category: 'women',
    image: pantSet,
    description: 'Elegant Red Ankara pant set',
  },
  {
    id: 6,
    name: 'Romper Jacket Set',
    price: 199.99,
    category: 'women',
    image: romperJacketSet,
    description: 'Elegant Ankara Romper Jacket Set',
  }
  ,
  {
    id: 7,
    name: 'Blazer Set',
    price: 189.99,
    category: 'women',
    image: blazer,
    description: 'Navy and Cream Blazer Set',
  },
  {
    id: 8,
    name: 'PantSuit',
    price: 179.99,
    category: 'women',
    image: pantSuit,
    description: 'Elegant Blue and Yellow Ankara Pant Suit',
  }
  ,
  {
    id: 9,
    name: 'Peplum Top',
    price: 119.99,
    category: 'women',
    image: peplumTop,
    description: 'Elegant black and white peplum top.',
  },
  {
    id: 8,
    name: 'Skirt',
    price: 99.99,
    category: 'women',
    image: skirt,
    description: 'Ankara Skirt',
  },

  {
    id: 11,
    name: 'Jumpsuit',
    price: 179.99,
    category: 'women',
    image: redJumpsuit,
    description: 'Red Ankara jumpsuit.',
  },
  {
    id: 12,
    name: 'Matching Blazer and Trousers Set',
    price: 189.99,
    category: 'women',
    image: blazer2,
    description: 'red, black, and gold geometric Ankara print blazer and matching wide-leg trousers',
  },
  {
    id: 13,
    name: 'Pant Suit Set',
    price: 189.99,
    category: 'women',
    image: pantSuit2,
    description: 'Two-piece pant suit set featuring a tailored blazer and high-waisted trousers in a vibrant Ankara print',
  },
  {
    id: 14,
    name: 'Skirt Set',
    price: 99.99,
    category: 'women',
    image: skirt2,
    description: 'high-waisted pencil skirt made from an Ankara wax print fabric',
  },
  {
    id: 15,
    name: 'Ankara Pant Suit',
    price: 189.99,
    category: 'women',
    image: pantSuit3,
    description: 'A vibrant blue and orange professional two-piece pant suit made from Ankara fabric',
  },
{
    id: 16,
    name: 'The Bomber Jacket',
    price: 89.99,
    category: 'women',
    image: bomberJacket,
    description: 'The bomber jacket paired with jeans.',
  },
];
