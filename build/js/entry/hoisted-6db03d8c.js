import { S as Swiper, N as Navigation } from "../bundle/navigation.16f12816.js";
import { P as Pagination } from "../bundle/pagination.082a7515.js";
import { O as Oe } from "./hoisted-208ac084.js";

new Swiper(".about-swiper__swiper", {
  modules: [Navigation, Pagination],
  centeredSlides: true,
  loop: true,
  speed: 500,
  breakpoints: {
    320: {
      spaceBetween: 12,
      slidesPerView: 1.15,
      slidesOffsetBefore: -15,
    },
    400: {
      spaceBetween: 12,
      slidesPerView: 1.5,
    },
    577: {
      spaceBetween: 15,
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    993: {
      slidesPerView: 2.6,
      spaceBetween: 25,
      slidesOffsetBefore: -32,
    },
  },
  // centerInsufficientSlides: true,
  preventClicks: true,
  navigation: {
    nextEl: ".about-swiper__next",
    prevEl: ".about-swiper__prev",
  },
  pagination: {
    el: ".about-swiper__pagination",
    type: "bullets",
    clickable: true,
  },
  on: {
    // click: (e) => {
    //   if (e.activeIndex < e.clickedIndex) {
    //     e.slideNext();
    //   }
    //   if (e.activeIndex > e.clickedIndex) {
    //     e.slidePrev();
    //   }
    // },
  },
});
Oe.bind(".about-swiper__slide", {
  groupAll: true,
  compact: false,
  Images: {
    initialSize: "fit",
    zoom: false,
  },
});
