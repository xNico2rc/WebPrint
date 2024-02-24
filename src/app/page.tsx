"use client";
import { Main } from "@/Secciones/Main";
import { Carrousel } from "@/Secciones/Carrousel";
import { BentoGrid } from "@/Secciones/BentoGrid";
import { LandingPage } from "@/Secciones/LandingPage";
export default function Home() {
  return (
    <>
      {/* <Loader /> */}
      <Main />
      <main className=" flex items-center justify-center flex-col gap-36">
        <Carrousel />
        <BentoGrid />
        <LandingPage />
      </main>
    </>
  );
}
