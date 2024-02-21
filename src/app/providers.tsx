"use client";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export default function Providers({ children, ...props }: ThemeProviderProps) {
  const actualRoute = usePathname();
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <NextThemesProvider {...props}>
      <ReactLenis root>{children}</ReactLenis>
    </NextThemesProvider>
  );
}
