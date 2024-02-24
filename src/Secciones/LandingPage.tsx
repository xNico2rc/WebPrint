import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonDemo } from "@/components/ButtonAction";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import laptopImage from "@/assets/mockup_laptop.png";
import phoneImage from "@/assets/mockup_phone.png";

export const LandingPage = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center gap-24 "
      id="LandingPage"
    >
      <section className="flex flex-col justify-center items-center">
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
          <Button type="submit" className=" font-bold">
            Contactanos Ya
          </Button>
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
      <section>
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
    </section>
  );
};
