import fs from "node:fs";
import path from "node:path";
import { promisify } from "node:util";
import { exec } from "node:child_process";
import { NextResponse } from "next/server";

const execAsync = promisify(exec);

export async function POST(request: Request) {
  const { path: route } = await request.json();

  await execAsync("npm run export:html");

  const filename =
    route === "/"
      ? "index.html"
      : `${route.replace(/^\//, "").replace(/\//g, "-")}.html`;

  const html = fs.readFileSync(
    path.join(process.cwd(), "export", filename),
    "utf8",
  );

  return NextResponse.json({
    status: "ok",
    filename,
    html,
  });
}
