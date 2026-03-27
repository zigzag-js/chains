import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join, basename, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const logosDir = join(__dirname, "../src/logos");
const outFile = join(logosDir, "generated.ts");

const files = readdirSync(logosDir).filter(
  (f) => f.endsWith(".svg") && !f.includes("fallback") && f !== "generated.ts"
);

let output = "// Auto-generated from SVG files — do not edit manually\n\n";

for (const file of files.sort()) {
  const varName =
    basename(file, ".svg").replace(/-([a-z])/g, (_, c) => c.toUpperCase()) +
    "Logo";
  const svg = readFileSync(join(logosDir, file), "utf-8").trim();
  const b64 = Buffer.from(svg).toString("base64");
  output += `export const ${varName} = "data:image/svg+xml;base64,${b64}";\n`;
}

writeFileSync(outFile, output);
console.log(`Generated ${files.length} logos → ${outFile}`);
