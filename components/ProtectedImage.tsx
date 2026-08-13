"use client";

import Image, { ImageProps } from "next/image";

export default function ProtectedImage(
  props: ImageProps
) {
  return (
    <div
      className="protected-image"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <Image
        {...props}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}