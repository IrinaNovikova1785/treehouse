import fs from "node:fs/promises";
import { globby } from "globby";
import { JSDOM } from "jsdom";

let html = await globby(`build/**/*.html`);
let hoisted = await globby(`build/js/entry/*.js`);

let entries = [];

await Promise.all(
  hoisted.map(async (file) => {
    entries.push(`import ".${file.slice(8)}";`);
  }),
);

console.log("Create file: build/js/module.js");
await fs.writeFile("./build/js/module.js", entries.join("\n"));

await Promise.all(
  html.map(async (file) => {
    let dateNow = String(Date.now()).substring(5);

    console.log("Processing file:", file);
    let html = await fs.readFile(file, "utf-8");
    let dom = new JSDOM(html);
    let head = dom.window.document.head;
    let headings = head.querySelectorAll("link");

    let style = headings[headings.length - 1];
    style.setAttribute("href", `./css/style.css?v=0.${dateNow}`);

    let script = head.querySelector("script");
    script.setAttribute("src", `./js/module.js?v=0.${dateNow}`);

    html = dom.serialize();

    await fs.writeFile(file, html);
  }),
);
