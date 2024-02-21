"use client";
import { motion } from "framer-motion";
import mainImage from "@/assets/image_main.jpg";
import laptopImage from "@/assets/mockup_laptop.png";
import phoneImage from "@/assets/mockup_phone.png";
import Image from "next/image";
import { CarouselSize } from "@/components/Carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ButtonDemo } from "@/components/ButtonAction";
import { useEffect } from "react";
import { Loader } from "@/components/Loader";

export default function Home() {
  return (
    <>
      {/* <Loader /> */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className=" flex flex-col items-center justify-center max-w-[90dvw] mx-auto "
      >
        <section className=" w-full flex flex-col items-center justify-center max-w-screen-2xl ">
          <div className="w-full flex items-center justify-center overflow-hidden ">
            <motion.h1
              initial={{ y: 250 }}
              animate={{ y: 0 }}
              transition={{ duration: 2, ease: [0.33, 1, 0.68, 1], delay: 0.5 }}
              className=" text-6xl xl:text-[200px] font-bold uppercase mt-8 xl:mt-0"
            >
              WebPrint®
            </motion.h1>
          </div>
          <div className="flex xl:flex-row flex-col items-center justify-between gap-8 w-full mt-4 xl:mt-0">
            <article className=" max-w-[500px]  overflow-hidden">
              <motion.p
                initial={{ y: 210 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 2,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 0.7,
                }}
                className=" text-charade-600 dark:text-charade-300  text-xl"
              >
                Desde estampados de camisetas personalizadas que reflejan tu
                estilo hasta la creación de páginas web estáticas elegantes que
                destacan tu presencia en línea.
              </motion.p>
            </article>
            <ButtonDemo />
            <article className=" max-w-[500px] overflow-hidden">
              <motion.p
                initial={{ y: 210 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 2,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 0.9,
                }}
                className=" text-charade-600 dark:text-charade-300  text-xl"
              >
                Desde estampados de camisetas personalizadas que reflejan tu
                estilo hasta la creación de páginas web estáticas elegantes que
                destacan tu presencia en línea.
              </motion.p>
            </article>
          </div>
        </section>
        <div className="w-full max-h-[688px]  rounded-2xl mt-8 overflow-hidden">
          <motion.div
            initial={{ y: 270 }}
            animate={{ y: 0 }}
            transition={{
              duration: 2,
              ease: [0.33, 1, 0.68, 1],
              delay: 1,
            }}
            className="w-full max-h-[688px] rounded-2xl mt-8"
          >
            <Image
              src={mainImage}
              alt="imagen de mockup de camiseta estampada "
              priority
              style={{
                objectFit: "cover", // cover, contain, none
                borderRadius: "16px",
                aspectRatio: "16/9",
                maxHeight: "688px",
              }}
            />
          </motion.div>
        </div>
        <section className=" flex xl:flex-row flex-col justify-between gap-32 mt-16 max-w-screen-2xl ">
          <h4 className=" font-bold text-2xl">Desde estampados </h4>
          <article>
            <p className=" text-3xl ">
              Desde estampados de camisetas personalizadas que reflejan tu
              estilo hasta la creación de páginas web estáticas elegantes que
              destacan tu presencia en línea.
            </p>{" "}
          </article>
          <h4 className=" font-bold text-2xl">Desde estampados </h4>
        </section>
      </motion.main>
      <section className="w-full max-w-[90dvw] mx-auto mt-20" id="modelos">
        <CarouselSize />
      </section>
      <section className="w-full max-w-[90dvw]  mx-auto h-screen flex justify-center mt-32 flex-col">
        <h2 className=" text-6xl xl:text-8xl font-bold capitalize">
          creemos que la moda es una forma de arte,{" "}
          <span className=" text-charade-600 dark:text-charade-400 ">
            y cada estampado cuenta una historia única.
          </span>
        </h2>
        <div className=" flex items-center justify-between gap-16 mb-4 xl:-my-6">
          <hr className=" border-1 w-full border-charade-600" />
          <ButtonDemo />
        </div>
        <p className="max-w-[790px] text-xl">
          Desde estampados de camisetas personalizadas que reflejan tu estilo
          hasta la creación de páginas web estáticas elegantes que destacan tu
          presencia en línea.
        </p>
        <Badge className="mt-8 text-base bg-charade-950 max-w-48 flex justify-center items-center">
          Desde estampados{" "}
        </Badge>
      </section>
      <section className="w-full max-w-[90dvw] mx-auto mt-32 flex flex-col justify-center items-center">
        <h2 className=" text-6xl  xl:text-8xl text-center font-bold">
          Páginas Web Estáticas{" "}
          <span className=" hidden xl:inline">
            que Dejan una Impresión Duradera
          </span>
        </h2>
        <p className=" text-charade-600 dark:text-charade-300 text-xl text-center max-w-[800px] mt-4">
          En el corazón de Web Print está nuestra pasión por la innovación.
          Además de ofrecer estampados únicos, también impulsamos tu presencia
          en línea con nuestras páginas web estáticas.
        </p>
        <div className="flex w-full max-w-lg items-center space-x-2 mt-8">
          <Input
            type="email"
            placeholder="Email"
            className=" border-charade-600"
          />
          <Button type="submit">Contactanos Ya</Button>
        </div>
        <Image
          src={laptopImage}
          alt="imagen de mockup de camiseta estampada "
          priority
          style={{
            objectFit: "cover", // cover, contain, none
            borderRadius: "16px",
            aspectRatio: "16/9",
            maxHeight: "670px",
          }}
          className=" mt-16 xl:mt-0"
        />

        <p className=" text-xl mt-16 xl:mt-8 max-w-screen-lg">
          Nuestro equipo de desarrolladores combina la creatividad con la
          funcionalidad, creando sitios web que no solo son visualmente
          atractivos sino también eficientes. Desde portfolios personales hasta
          páginas de negocios, te ayudamos a destacar en el vasto mundo digital.
        </p>
      </section>
      <section className="mt-32 max-w-[90dvw] mx-auto">
        <div className=" w-full gap-8  flex flex-col-reverse xl:flex-row justify-between xl:items-center">
          <h2 className=" xl:w-[70%] text-6xl text-center font-bold">
            Optimización para Dispositivos Móviles: Tu Sitio, en Todas Partes
          </h2>
          <div className="  flex xl:justify-end items-start">
            <Badge className="mt-8 text-base bg-charade-950 h-10 max-w-48 flex justify-center items-center">
              estampados{" "}
            </Badge>
          </div>
        </div>
        <article className=" flex flex-col xl:flex-row items-center">
          <Image
            src={phoneImage}
            alt="imagen de mockup de camiseta estampada "
            priority
            style={{
              objectFit: "contain", // cover, contain, none
              borderRadius: "16px",
              aspectRatio: "9/16",
              maxHeight: "688px",
            }}
            className=" xl:w-1/2 mt-8 xl:mt-0"
          />
          <div className=" xl:w-1/2 grid grid-cols-1 gap-8 mt-16 xl:mt-0">
            <p className=" text-3xl max-w-screen-md">
              El mundo se mueve rápidamente, y tu presencia en línea debe seguir
              el ritmo. Todas nuestras páginas web estáticas están diseñadas y
              optimizadas para funcionar perfectamente en dispositivos
              móviles.Desde smartphones hasta tabletas, tu sitio se verá y
              funcionará de manera impecable, sin importar cómo tus visitantes
              el accedan.
            </p>
            <ButtonDemo />
          </div>
        </article>
      </section>
    </>
  );
}
