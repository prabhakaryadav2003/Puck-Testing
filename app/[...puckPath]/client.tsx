"use client";

import type { Data } from "@puckeditor/core";
import { Render } from "@puckeditor/core";
import { useEffect, useState } from "react";

import config from "../../puck.config";

export function Client({ data }: { path: string; data: Partial<Data> }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  if (data.content) {
    return <Render config={config} data={data} />;
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>404</h1>
        <p>Page does not exist in session storage</p>
      </div>
    </div>
  );
}

export default Client;
