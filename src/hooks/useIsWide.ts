"use client";

import { useEffect, useState } from "react";
import { SIDEBAR_BREAKPOINT } from "@/config/ui";

export default function useIsWide() {
  const [isWide, setIsWide] = useState<boolean>(false);

  useEffect(() => {
    const handle = () => setIsWide(window.innerWidth >= SIDEBAR_BREAKPOINT);
    // Set initial value on client
    handle();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  return isWide;
}
