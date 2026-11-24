import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-liner for the One-Liner Laugh Lab: the excuse a robot vacuum gives
// after eating a sock. Deadpan, short, and the joke comes from the fit.
// The venue defence works because the vacuum never admits the meal —
// it just hosts the aftermath and charges no rent.
const line =
  "The sock entered my dustbin of its own free will. I was merely the venue.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
