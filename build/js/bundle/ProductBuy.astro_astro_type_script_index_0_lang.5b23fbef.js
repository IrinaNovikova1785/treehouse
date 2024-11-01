import { O as Oe } from "../entry/hoisted-208ac084.js";

const products = document.querySelectorAll(".add-cart");
const openModal = (e) => {
  e.preventDefault();
  new Oe([{ src: "#product" }], {
    compact: false,
    autoFocus: false,
  });
};
products.forEach((product) => product.addEventListener("click", openModal));
