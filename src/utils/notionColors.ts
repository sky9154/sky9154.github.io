const NOTION_COLOR_MAP: Record<string, string> = {
  default: "var(--text-sub)",
  gray: "#9b9a97",
  brown: "#9f6b53",
  orange: "#d9730d",
  yellow: "#cb912f",
  green: "#448361",
  blue: "#337ea9",
  purple: "#9065b0",
  pink: "#c14c8a",
  red: "#d44c47"
};

export function getNotionColor(color: string): string {
  return NOTION_COLOR_MAP[color] || NOTION_COLOR_MAP.default;
}
