"use client";

import type { Data } from "@puckeditor/core";
import { Puck } from "@puckeditor/core";
import { useRouter } from "next/navigation";
import config from "../../../puck.config";

export function Client({ path, data }: { path: string; data: Partial<Data> }) {
  const router = useRouter();

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
      overrides={{
        headerActions: ({ children }) => (
          <>
            <button
              onClick={() => router.push("/")}
              style={{
                padding: "8px 16px",
                borderRadius: "6px",
                border: "1px solid #d1d5db",
                background: "#fff",
                color: "#111827",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                marginRight: "12px",
                transition: "all 0.2s ease",
              }}
            >
              Preview
            </button>

            {children}
          </>
        ),
      }}
      onPublish={async (data) => {
        const response = await fetch("/puck/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data, path }),
        });

        const { filename, html } = await response.json();

        download(filename, html);
      }}
    />
  );
}
