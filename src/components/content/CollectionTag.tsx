import { useState } from "react";
import { Chip } from "@mui/material";

import type { NotionTag } from "@/services/notionApi";
import { getNotionColor } from "@/utils/notionColors";


interface CollectionTagProps {
  tag: NotionTag;
  wrap?: boolean;
}

function CollectionTag({ tag, wrap = false }: CollectionTagProps) {
  const [pressed, setPressed] = useState(false);
  const [touchInput, setTouchInput] = useState(false);
  const color = getNotionColor(tag.color);
  const highlight = {
    color: `color-mix(in srgb, ${color} 35%, var(--text-main))`,
    borderColor: `color-mix(in srgb, ${color} 80%, var(--text-main))`
  };

  return (
    <Chip
      className="collection-tag"
      label={tag.name}
      size="small"
      data-pressed={pressed || undefined}
      data-touch={touchInput || undefined}
      onPointerEnter={(event) => setTouchInput(event.pointerType !== "mouse")}
      onPointerDown={(event) => { setTouchInput(event.pointerType !== "mouse"); setPressed(true); }}
      onPointerUp={() => setPressed(false)}
      onPointerCancel={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      onLostPointerCapture={() => setPressed(false)}
      sx={{
        cursor: "pointer",
        fontWeight: 600,
        bgcolor: `color-mix(in srgb, ${color}, transparent 82%)`,
        color: "var(--text-main)",
        border: `1px solid color-mix(in srgb, ${color}, transparent 55%)`,
        WebkitTapHighlightColor: "transparent",
        transition: "color var(--motion-fast) var(--ease-standard), border-color var(--motion-fast) var(--ease-standard)",
        ...(wrap && { maxWidth: "100%", height: "auto", minHeight: 24, "& .MuiChip-label": { whiteSpace: "normal", overflowWrap: "anywhere", py: 0 } }),
        "&[data-pressed]": highlight,
        "@media (hover: hover) and (pointer: fine)": { "&:not([data-touch]):hover": highlight },
        "@media (prefers-reduced-motion: reduce)": { transition: "none !important" }
      }}
    />
  );
}

export default CollectionTag;
