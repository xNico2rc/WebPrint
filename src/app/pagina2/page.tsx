"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function pagina2() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      className={`transition-all duration-300 flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1>Page2</h1>
      <Link href="/">Pagina1</Link>
    </motion.main>
  );
}
