import { t as tippyAndFancybox } from "../bundle/popover.de9aa5ce.js";
import "../bundle/ProductSwiper.astro_astro_type_script_index_0_lang.e20732e3.js";
import { O as Oe } from "./hoisted-208ac084.js";
import "./hoisted-891eb067.js";
import {
  g as getDocument,
  i as isObject,
  f as elementChildren,
  S as Swiper,
  N as Navigation,
} from "../bundle/navigation.16f12816.js";
import { P as Pagination } from "../bundle/pagination.082a7515.js";
import "../bundle/ProductBuy.astro_astro_type_script_index_0_lang.5b23fbef.js";

const button = document.querySelector(".product-hero__info-trigger");
const tooltip = document.querySelector(".product-hero__info-text");
if (button instanceof HTMLElement && tooltip instanceof HTMLElement) {
  tippyAndFancybox(button, tooltip);
}
const allSpecs = document.querySelector(".product-hero__feature");
const table = document.querySelector(".product-tab");
if (allSpecs instanceof HTMLElement && table instanceof HTMLElement) {
  allSpecs.addEventListener("click", (e) => {
    e.preventDefault();
    const tab = table.querySelector('.tab__item[data-tab="2"]');
    if (tab instanceof HTMLElement) tab.click();
    table.scrollIntoView();
  });
}

function Thumb(_ref) {
  let { swiper, extendParams, on } = _ref;
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs",
    },
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null,
  };
  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (
      clickedSlide &&
      clickedSlide.classList.contains(
        swiper.params.thumbs.slideThumbActiveClass,
      )
    )
      return;
    if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(
        thumbsSwiper.clickedSlide.getAttribute("data-swiper-slide-index"),
        10,
      );
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      swiper.slideToLoop(slideToIndex);
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  function init() {
    const { thumbs: thumbsParams } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false,
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false,
      });
      swiper.thumbs.swiper.update();
    } else if (isObject(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false,
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }
    swiper.thumbs.swiper.el.classList.add(
      swiper.params.thumbs.thumbsContainerClass,
    );
    swiper.thumbs.swiper.on("tap", onThumbClick);
    return true;
  }
  function update(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const slidesPerView =
      thumbsSwiper.params.slidesPerView === "auto"
        ? thumbsSwiper.slidesPerViewDynamic()
        : thumbsSwiper.params.slidesPerView;

    // Activate thumbs
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }
    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.forEach((slideEl) =>
      slideEl.classList.remove(thumbActiveClass),
    );
    if (
      thumbsSwiper.params.loop ||
      (thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled)
    ) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        elementChildren(
          thumbsSwiper.slidesEl,
          `[data-swiper-slide-index="${swiper.realIndex + i}"]`,
        ).forEach((slideEl) => {
          slideEl.classList.add(thumbActiveClass);
        });
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        if (thumbsSwiper.slides[swiper.realIndex + i]) {
          thumbsSwiper.slides[swiper.realIndex + i].classList.add(
            thumbActiveClass,
          );
        }
      }
    }
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      const currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;
      if (thumbsSwiper.params.loop) {
        const newThumbsSlide = thumbsSwiper.slides.filter(
          (slideEl) =>
            slideEl.getAttribute("data-swiper-slide-index") ===
            `${swiper.realIndex}`,
        )[0];
        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
        direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
      }
      if (useOffset) {
        newThumbsIndex +=
          direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (
        thumbsSwiper.visibleSlidesIndexes &&
        thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0
      ) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (
          newThumbsIndex > currentThumbsIndex &&
          thumbsSwiper.params.slidesPerGroup === 1
        );
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }
  }
  on("beforeInit", () => {
    const { thumbs } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    if (
      typeof thumbs.swiper === "string" ||
      thumbs.swiper instanceof HTMLElement
    ) {
      const document = getDocument();
      const getThumbsElementAndInit = () => {
        const thumbsElement =
          typeof thumbs.swiper === "string"
            ? document.querySelector(thumbs.swiper)
            : thumbs.swiper;
        if (thumbsElement && thumbsElement.swiper) {
          thumbs.swiper = thumbsElement.swiper;
          init();
          update(true);
        } else if (thumbsElement) {
          const onThumbsSwiper = (e) => {
            thumbs.swiper = e.detail[0];
            thumbsElement.removeEventListener("init", onThumbsSwiper);
            init();
            update(true);
            thumbs.swiper.update();
            swiper.update();
          };
          thumbsElement.addEventListener("init", onThumbsSwiper);
        }
        return thumbsElement;
      };
      const watchForThumbsToAppear = () => {
        if (swiper.destroyed) return;
        const thumbsElement = getThumbsElementAndInit();
        if (!thumbsElement) {
          requestAnimationFrame(watchForThumbsToAppear);
        }
      };
      requestAnimationFrame(watchForThumbsToAppear);
    } else {
      init();
      update(true);
    }
  });
  on("slideChange update resize observerUpdate", () => {
    update();
  });
  on("setTransition", (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    thumbsSwiper.setTransition(duration);
  });
  on("beforeDestroy", () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update,
  });
}

const thumbs = new Swiper(".preview-swiper__thumbs", {
  modules: [Navigation, Thumb],
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
});
new Swiper(".preview-swiper__main", {
  modules: [Navigation, Thumb, Pagination],
  // direction: "vertical",
  slidesPerView: 1,
  loop: true,
  thumbs: { swiper: thumbs },
  navigation: {
    nextEl: ".preview-swiper__next",
    prevEl: ".preview-swiper__prev",
  },
  pagination: {
    el: ".preview-swiper__pagination",
    type: "bullets",
    clickable: true,
  },
});
Oe.bind(".preview-swiper__main-item", {
  groupAll: true,
  compact: false,
  dragToClose: false,
  Images: {
    initialSize: "fit",
    zoom: false,
  },
});
