export function removeClass(element: Element, name: string) {
  element.classList.remove(name);
}

export function addClass(element: Element, name: string) {
  element.classList.add(name);
}

export function openDrawer(trigger: Element, container: Element) {
  document.body.classList.add("body-overflow");
  trigger.setAttribute("data-open", "true");
  trigger.classList.add("icon-close");
  trigger.classList.remove("icon-burger");
  if (container instanceof HTMLElement) container.style.left = "0";
}

export function closeDrawer(trigger: Element, container: Element) {
  document.body.classList.remove("body-overflow");
  trigger.setAttribute("data-open", "false");
  trigger.classList.remove("icon-close");
  trigger.classList.add("icon-burger");
  if (container instanceof HTMLElement) container.removeAttribute("style");
}
