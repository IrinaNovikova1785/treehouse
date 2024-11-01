import tippy from "tippy.js";

export function tippyAndFancybox(button: HTMLElement, tooltip: HTMLElement) {
  if (window.innerWidth > 992) {
    tooltip.style.display = "block";
    tippy(button, {
      content: tooltip,
      placement: "bottom",
      theme: "apple",
      offset: [0, 10],
      arrow: false,
    });
  } else {
    button.classList.add("modalbox");
    button.setAttribute("href", "#popover");
    button.addEventListener("click", () => {
      const popover = document.getElementById("popover");
      if (popover) popover.innerHTML = `<p>${tooltip.innerText}</p>`;
    });
  }
}
