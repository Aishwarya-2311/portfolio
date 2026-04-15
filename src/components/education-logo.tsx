"use client";

import { useState } from "react";

interface EducationLogoProps {
  src: string;
  alt: string;
}

export default function EducationLogo({ src, alt }: EducationLogoProps) {
  const [imageError, setImageError] = useState(false);
  const showFallback = !src || src === "#" || imageError;
  const initial = alt?.trim()?.[0]?.toUpperCase() ?? "";

  if (showFallback) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none flex items-center justify-center text-sm font-semibold text-foreground">
        {initial}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}
