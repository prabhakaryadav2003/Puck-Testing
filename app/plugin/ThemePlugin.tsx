import { Plugin } from "@puckeditor/core";
import { Palette } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = {
  primary: string;
  secondary: string;
  background: string;
  foreground: string;
  radius: number;
};

const DEFAULT_THEME: Theme = {
  primary: "#2563eb",
  secondary: "#7c3aed",
  background: "#ffffff",
  foreground: "#111827",
  radius: 8,
};

export const ThemePlugin: Plugin = {
  name: "theme",

  label: "Theme",

  icon: <Palette size={18} />,

  render() {
    const [theme, setTheme] = useState(DEFAULT_THEME);

    useEffect(() => {
      document.documentElement.style.setProperty(
        "--color-primary",
        theme.primary,
      );
      document.documentElement.style.setProperty(
        "--color-secondary",
        theme.secondary,
      );
      document.documentElement.style.setProperty(
        "--color-background",
        theme.background,
      );
      document.documentElement.style.setProperty(
        "--color-foreground",
        theme.foreground,
      );
      document.documentElement.style.setProperty(
        "--radius",
        `${theme.radius}px`,
      );
    }, [theme]);

    const update =
      <K extends keyof Theme>(key: K) =>
      (value: Theme[K]) =>
        setTheme((prev) => ({
          ...prev,
          [key]: value,
        }));

    const ColorField = ({
      label,
      value,
      onChange,
    }: {
      label: string;
      value: string;
      onChange: (v: string) => void;
    }) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <span
          style={{
            fontSize: 13,
            fontWeight: 500,
            color: "#374151",
          }}
        >
          {label}
        </span>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: 10,
            padding: "4px 8px",
          }}
        >
          <input
            type='color'
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{
              width: 28,
              height: 28,
              border: "none",
              background: "transparent",
              padding: 0,
              cursor: "pointer",
            }}
          />

          <span
            style={{
              fontSize: 12,
              fontFamily: "monospace",
              color: "#6b7280",
              width: 70,
            }}
          >
            {value.toUpperCase()}
          </span>
        </div>
      </div>
    );

    return (
      <div
        style={{
          padding: 20,
          background: "#f8fafc",
          minHeight: "100%",
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: 8,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#6b7280",
              textTransform: "uppercase",
              letterSpacing: ".08em",
            }}
          >
            Colors
          </div>

          <ColorField
            label='Primary'
            value={theme.primary}
            onChange={update("primary")}
          />

          <ColorField
            label='Secondary'
            value={theme.secondary}
            onChange={update("secondary")}
          />

          <ColorField
            label='Background'
            value={theme.background}
            onChange={update("background")}
          />

          <ColorField
            label='Foreground'
            value={theme.foreground}
            onChange={update("foreground")}
          />
        </div>
      </div>
    );
  },
};
