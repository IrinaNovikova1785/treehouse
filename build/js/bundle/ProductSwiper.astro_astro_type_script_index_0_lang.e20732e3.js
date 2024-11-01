import { S as Swiper, N as Navigation } from "./navigation.16f12816.js";

new Swiper(".product-swiper__swiper", {
  modules: [Navigation],
  breakpoints: {
    320: {
      spaceBetween: 10,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    577: {
      spaceBetween: 15,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    769: {
      slidesPerView: 3,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      spaceBetween: 15,
      slidesPerGroup: 1,
    },
    993: {
      slidesPerView: 4,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
  },
  navigation: {
    nextEl: ".product-swiper__next",
    prevEl: ".product-swiper__prev",
  },
});
