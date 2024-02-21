"use client";
import Link from "next/link";
import { ModeToggle } from "./Toggle";
import { motion } from "framer-motion";

export const NavbarDemo = () => {
  return (
    <motion.nav
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-20   grid place-items-center sticky top-0  border-b-[1px] z-50 border-charade-300 dark:border-charade-700s bg-charade-50 dark:bg-charade-950 dark:text-charade-50 text-charade-950 overflow-hidden"
    >
      <div className=" w-full max-w-[90dvw] mx-auto">
        <motion.div
          initial={{ y: 65 }}
          animate={{ y: 0 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          className="w-full flex items-center justify-between "
        >
          <Link href="/" className=" text-4xl font-bold ">
            WP®
          </Link>

          <div className=" flex items-center justify-center gap-4 text-lg">
            <ModeToggle />
            <Link href="#inicio">Inicio</Link>
            <Link href="#modelos">Modelos</Link>
            <Link href="">Paginas Web</Link>
            <Link href="">About</Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};
