import fs from "node:fs";
import path from "node:path";
import { promisify } from "node:util";
import { exec } from "node:child_process";

import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const execAsync = promisify(exec);

export async function POST(request: Request) {
  const payload = await request.json();

  const dbFile = "database.json";

  const existingData = JSON.parse(
    fs.existsSync(dbFile) ? fs.readFileSync(dbFile, "utf8") : "{}",
  );

  existingData[payload.path] = payload.data;

  fs.writeFileSync(dbFile, JSON.stringify(existingData, null, 2));

  // Run the export script
  await execAsync("npm run export:html");

  const filename =
    payload.path === "/"
      ? "index.html"
      : `${payload.path.replace(/^\//, "").replace(/\//g, "-")}.html`;

  const htmlPath = path.join(process.cwd(), "export", filename);

  const html = fs.readFileSync(htmlPath, "utf8");

  revalidatePath(payload.path);

  return NextResponse.json({
    status: "ok",
    filename,
    html,
  });
}
