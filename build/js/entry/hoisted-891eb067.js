import "./hoisted-208ac084.js";

const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => tabLogic(tab));
function tabLogic(tab) {
  const triggers = tab.querySelectorAll(".tab__item");
  const contents = tab.querySelectorAll(".tab__content");
  const tabList = document.querySelector(".tab__list");
  const tabContainer = document.querySelector(".tab__container");
  const open = tab.getAttribute("data-open") || 1;
  triggers.forEach((trigger, index) => {
    trigger.setAttribute("data-tab", String(index + 1));
    if (+open === index + 1) {
      trigger.classList.add("tab__item--active");
    }
  });
  contents.forEach((content, index) => {
    content.setAttribute("data-tab", String(index + 1));
    if (+open === index + 1) {
      content.classList.add("tab__content--active");
      content.classList.add("tab__content--opacity");
    }
  });
  const clickHandler = (event) => {
    triggers.forEach((t) => {
      t.classList.remove("tab__item--active");
    });
    contents.forEach((c) => {
      c.classList.remove("tab__content--active");
      c.classList.remove("tab__content--opacity");
    });
    if (event.target instanceof Element && tabList && tabContainer) {
      const index = event.target.getAttribute("data-tab");
      const selectedTrigger = tabList.querySelector(`[data-tab="${index}"]`);
      if (selectedTrigger) selectedTrigger.classList.add("tab__item--active");
      const selectedContent = tabContainer.querySelector(
        `[data-tab="${index}"]`,
      );
      if (selectedContent) {
        selectedContent.classList.add("tab__content--active");
        setTimeout(() => {
          selectedContent.classList.add("tab__content--opacity");
        }, 200);
      }
    }
  };
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", clickHandler);
  });
}
