import { bench } from "vitest";
import pug from "pug";
import Handlebars from "handlebars";
import Mustache from "mustache";
import { readFileSync } from "fs";

const iterations = 10000;
const str = "a".repeat(60_000);

const html = readFileSync("template.html").toString();
const html2 = readFileSync("template2.html").toString();
const compiledPug = pug.compileFile("template.pug");
const compiledHB = Handlebars.compile(html2);

bench(
  "pug",
  () => {
    compiledPug({
      one: str,
      two: str,
      three: str,
      four: str,
      five: str,
      six: str,
      seven: str,
      eight: str,
      nine: str,
      ten: str,
      eleven: str,
    });
  },
  { iterations }
);

bench(
  "handlebars",
  () => {
    compiledHB({
      one: str,
      two: str,
      three: str,
      four: str,
      five: str,
      six: str,
      seven: str,
      eight: str,
      nine: str,
      ten: str,
      eleven: str,
    });
  },
  { iterations }
);

bench(
  "mustache",
  () => {
    Mustache.render(html2, {
      one: str,
      two: str,
      three: str,
      four: str,
      five: str,
      six: str,
      seven: str,
      eight: str,
      nine: str,
      ten: str,
      eleven: str,
    });
  },
  { iterations }
);

bench(
  "replace",
  () => {
    html
      .replace("<!-- one -->", str)
      .replace("<!-- two -->", str)
      .replace("<!-- three -->", str)
      .replace("<!-- four -->", str)
      .replace("<!-- five -->", str)
      .replace("<!-- six -->", str)
      .replace("<!-- seven -->", str)
      .replace("<!-- eight -->", str)
      .replace("<!-- nine -->", str)
      .replace("<!-- ten -->", str)
      .replace("<!-- eleven -->", str);
  },
  { iterations }
);
