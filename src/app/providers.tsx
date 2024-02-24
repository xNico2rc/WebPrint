"use client";
import * as React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export default function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ReactLenis root>{children}</ReactLenis>
    </NextThemesProvider>
  );
}
