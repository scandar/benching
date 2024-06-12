import data from "large-file.json";
import { bench } from "vitest";
import { uneval } from "devalue";

bench(
  "devalue.uneval",
  () => {
    uneval(data);
  },
  { time: 10_000, warmupTime: 1_000 }
);

bench(
  "json.stringify",
  () => {
    JSON.stringify(data);
  },
  { time: 10_000, warmupTime: 1_000 }
);
