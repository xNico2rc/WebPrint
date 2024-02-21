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
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={actualRoute}>
          <ReactLenis root>{children}</ReactLenis>
          <motion.div
            className="slide-in flex items-center justify-center fixed top-0 left-0 w-full h-screen origin-bottom bg-charade-950  text-charade-50 dark:bg-charade-50 dark:text-charade-950 z-[999]  "
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p className=" font-black text-5xl">
              {" "}
              {actualRoute === "/"
                ? "inicio"
                : actualRoute === "/pagina2"
                ? "pagina2"
                : ""}
            </motion.p>
          </motion.div>
          <motion.div
            className="slide-out fixed top-0 left-0 w-full h-screen origin-top bg-charade-950  text-charade-50 dark:bg-charade-50 dark:text-charade-950 z-[999] "
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
        </motion.div>
      </AnimatePresence>
    </NextThemesProvider>
  );
}
