import { InstagramPost } from '../types/productTypes';

// Import assets directly
import promoVideo from '../assets/Shared Mobile & Desktop Assets/ig_video.mp4';
import igImage2 from '../assets/Desktop Assets/IG Image 2_DT.jpg';
import igImage3 from '../assets/Desktop Assets/IG Image 3_DT.jpg';
import igImage4 from '../assets/Desktop Assets/IG Image 4_DT.jpg';
import igImage5 from '../assets/Desktop Assets/IG Image 5_DT.jpg';

// Change IG hand and URL here
export const INSTAGRAM_URL = 'https://www.instagram.com/ig-link/';

// imported assets for data
export const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    type: 'video',
    src: promoVideo,
    alt: 'The Promotional Video',
    handle: ''
  },
  {
    id: 2,
    type: 'image',
    src: igImage2,
    alt: 'The Rock in Project Rock hoodie looking snazzy',
    handle: ''
  },
  {
    id: 3,
    type: 'image',
    src: igImage3,
    alt: 'Cozzy warm UA jacket',
    handle: ''
  },
  {
    id: 4,
    type: 'image',
    src: igImage4,
    alt: 'running outdoors with UA',
    handle: ''
  },
  {
    id: 5,
    type: 'image',
    src: igImage5,
    alt: 'We Get To Work tank top',
    handle: ''
  },
]; 