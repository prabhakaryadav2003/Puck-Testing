import fs from "node:fs";
import path from "node:path";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Render } from "@puckeditor/core";

import config from "../puck.config";

const database = JSON.parse(fs.readFileSync("database.json", "utf8"));

const outputDir = path.join(process.cwd(), "export");

fs.mkdirSync(outputDir, { recursive: true });

for (const [route, data] of Object.entries(database)) {
  const body = renderToStaticMarkup(
    React.createElement(Render, {
      config,
      data,
    }),
  );

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${route}</title>

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
${body}
</body>
</html>`;

  const filename =
    route === "/"
      ? "index.html"
      : `${route.replace(/^\//, "").replace(/\//g, "-")}.html`;

  fs.writeFileSync(path.join(outputDir, filename), html);
}

console.log("HTML exported to /export");
