import { t as tippyAndFancybox } from "../bundle/popover.de9aa5ce.js";
import { O as Oe } from "./hoisted-208ac084.js";
import "../bundle/ProductBuy.astro_astro_type_script_index_0_lang.5b23fbef.js";

const button = document.querySelector(".contact-form__file-trigger");
const tooltip = document.querySelector(".contact-form__file-text");
if (button instanceof HTMLElement && tooltip instanceof HTMLElement) {
  tippyAndFancybox(button, tooltip);
}
const form = document.querySelector(".contact-form");
if (form) {
  const submitForm = (e) => {
    e.preventDefault();
    const modal = new Oe([{ src: "#contact" }], {
      closeButton: false,
      compact: false,
      autoFocus: false,
    });
    const close = document.querySelector("#contact .button");
    if (close) {
      close.addEventListener("click", () => modal.close());
    }
  };
  form.addEventListener("submit", submitForm);
}

const container = document.querySelector(".file");
const input = document.querySelector(".file__element");
if (container && input) {
  let updatePreview2 = function (selectedFiles2) {
      const r = list.querySelector(".file__row");
      if (r) r.remove();
      const c = list.querySelector(".file__col");
      if (c) c.remove();
      let row = null;
      var dt = new DataTransfer();
      selectedFiles2.forEach((file) => {
        dt.items.add(file);
        if (!row) {
          row = document.createElement("div");
          row.classList.add("file__row");
          list.append(row);
        }
        row.append(createFileImage2(file));
        if (input instanceof HTMLInputElement) input.files = dt.files;
      });
    },
    createCloseButton2 = function (file) {
      const close = document.createElement("div");
      close.classList.add("icon-close");
      close.classList.add("file__close");
      close.addEventListener("click", (e) => {
        e.preventDefault();
        const index = selectedFiles.indexOf(file);
        if (index > -1) {
          let s = new Set(selectedFiles);
          s.delete(file);
          selectedFiles = Array.from(s);
          updatePreview2(selectedFiles);
        }
      });
      return close;
    },
    createFileImage2 = function (file) {
      const item = document.createElement("div");
      item.classList.add("file__image");
      item.append(createCloseButton2(file));
      const reader = new FileReader();
      reader.onloadend = () => {
        item.style.backgroundImage = `url(${reader.result})`;
      };
      reader.readAsDataURL(file);
      return item;
    };
  const list = document.createElement("div");
  list.classList.add("file__list");
  container.append(list);
  let selectedFiles = [];
  const onchangeHandler = (e) => {
    if (e.target instanceof HTMLInputElement && e.target.files) {
      const files = e.target.files;
      for (const file of files) {
        if (file.type.includes("image")) selectedFiles.push(file);
      }
    }
    if (selectedFiles.length) updatePreview2(selectedFiles);
  };
  input.addEventListener("change", onchangeHandler);
}
