"use client";
import Link from "next/link";
import { ModeToggle } from "./Toggle";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export const NavbarDemo = () => {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <nav className="w-full h-20   grid place-items-center sticky top-0  border-b-[1px] z-50 border-charade-300 dark:border-charade-700s bg-charade-50 dark:bg-charade-950 dark:text-charade-50 text-charade-950">
      <div className=" w-full max-w-[90dvw] mx-auto">
        <div className="w-full flex items-center justify-between">
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
        </div>
      </div>
    </nav>
  );
};
