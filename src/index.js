import './index.scss';
import './styles/base/adapt_media.scss';
import modal from './scripts/modal';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

modal();

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  zoom: {
    maxRatio: 3,
    minRatio: 1,
  }
});
