import { Promotion } from '../types/productTypes';

// Asset Imports
import promo1Image from '../assets/Shared Mobile & Desktop Assets/Promo 1.jpg';
import promo2Image from '../assets/Shared Mobile & Desktop Assets/Promo 2.jpg';
import promo3Image from '../assets/Shared Mobile & Desktop Assets/Promo 3.jpg';
import promo4Image from '../assets/Shared Mobile & Desktop Assets/Promo 4.jpg';

// Promotion data
export const promotionsData: Promotion[] = [
  { image: promo1Image, text: 'BUY 2 FOR R700', link: '#' },
  { image: promo2Image, text: 'BUY 2 FOR R800', link: '#' },
  { image: promo3Image, text: 'BUY 2 FOR R1000', link: '#' },
  { image: promo4Image, text: 'BUY 2 FOR R1200', link: '#' },
]; 