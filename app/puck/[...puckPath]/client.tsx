"use client";

import type { Data } from "@puckeditor/core";
import { Puck } from "@puckeditor/core";
import config from "../../../puck.config";

export function Client({ path, data }: { path: string; data: Partial<Data> }) {
  const download = (filename: string, content: string) => {
    const blob = new Blob([content], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <Puck
      config={config}
      data={data}
      onPublish={async (data) => {
        const response = await fetch("/puck/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data, path }),
        });

        const { filename, html } = await response.json();

        const blob = new Blob([html], {
          type: "text/html",
        });

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();

        URL.revokeObjectURL(url);
      }}
    />
  );
}
