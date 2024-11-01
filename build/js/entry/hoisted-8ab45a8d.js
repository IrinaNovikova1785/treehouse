import { t as tippyAndFancybox } from "../bundle/popover.de9aa5ce.js";
import { O as Oe } from "./hoisted-208ac084.js";

const checkItems = document.querySelectorAll(".cart__service-item");
checkItems.forEach((item) => showTip(item));
function showTip(element) {
  const button = element.querySelector(".cart__service-trigger");
  const tooltip = element.querySelector(".cart__service-text");
  if (button instanceof HTMLElement && tooltip instanceof HTMLElement) {
    tippyAndFancybox(button, tooltip);
  }
}
const form = document.querySelector(".cart__body");
if (form) {
  const submitForm = (e) => {
    e.preventDefault();
    const modal = new Oe([{ src: "#order" }], {
      closeButton: false,
      compact: false,
      autoFocus: false,
    });
    const close = document.querySelector("#order .button");
    if (close) {
      close.addEventListener("click", () => modal.close());
    }
  };
  form.addEventListener("submit", submitForm);
}
