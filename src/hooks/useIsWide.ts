"use client";

import { useEffect, useState } from "react";
import { SIDEBAR_BREAKPOINT } from "@/config/ui";

export default function useIsWide() {
  const [isWide, setIsWide] = useState<boolean>(() => typeof window !== "undefined" && window.innerWidth >= SIDEBAR_BREAKPOINT);

  useEffect(() => {
    const handle = () => setIsWide(window.innerWidth >= SIDEBAR_BREAKPOINT);
    handle();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  return isWide;
}
