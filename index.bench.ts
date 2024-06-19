import { bench } from "vitest";
import pug from "pug";
import Handlebars from "handlebars";
import Mustache from "mustache";
import { readFileSync } from "fs";

const iterations = 10000;
const str = "a".repeat(100_000); // mock a 100kb script

const html = readFileSync("template.html").toString();
const compiledPug = pug.compileFile("template.pug");
const compiledHB = Handlebars.compile(html);

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
    Mustache.render(html, {
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
    const html = `
    <html>
      <!-- one -->
      <!-- two -->
      <!-- three -->
      <!-- four -->
      <!-- five -->
      <!-- six -->
      <!-- seven -->
      <!-- eight -->
      <!-- nine -->
      <!-- ten -->
      <!-- eleven -->
    </html>
  `;
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
