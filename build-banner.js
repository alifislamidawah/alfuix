// build-banner.js — Bootstrap-style banner for AL-UIX (all build files)
const fs = require("fs");
const path = require("path");

// Load package.json
const pkg = JSON.parse(fs.readFileSync("./package.json", "utf8"));

// Current year
const year = new Date().getFullYear();

// Repository homepage & license link
const homepage = pkg.homepage || "https://github.com/yourusername/AL-UIX/";
const licenseLink = `${homepage.replace(/\/$/, "")}/blob/main/LICENSE`;

// Build banner (Bootstrap-style)
const banner =
  `/*!\n` +
  ` * alfuix (${homepage})\n` +
  ` * Copyright ${year} - The ${pkg.author || "Alif Lab & alfuix"} Authors\n` +
  ` * Licensed under ${pkg.license} https://github.com/alifislamidawah/alfuix/blob/main/LICENSE\n` +
  ` */\n`;

// Target directories
const targets = ["dist/css", "dist/js"];

// Add banner to all CSS and JS files
for (const dir of targets) {
  if (!fs.existsSync(dir)) continue;

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".css") || f.endsWith(".js"));

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const content = fs.readFileSync(fullPath, "utf8");

    // Avoid duplicating banner
    if (content.startsWith("/*!")) continue;

    fs.writeFileSync(fullPath, banner + content, "utf8");
    console.log(`✅ Banner added: ${fullPath}`);
  }
}
