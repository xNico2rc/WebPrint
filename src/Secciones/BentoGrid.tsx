import { Badge } from "@/components/ui/badge";
import { ButtonDemo } from "@/components/ButtonAction";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import phoneImage from "@/assets/mockup_phone.png";
import mainImage from "@/assets/image_main.jpg";

export const BentoGrid = () => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 overflow-hidden  gap-6 ">
      <article className="md:col-span-2 bento1 rounded-3xl p-8 bg-gradient-to-tl from-charade-300 to-charade-100 dark:from-charade-800 dark:to-charade-900 ">
        <Badge className="bg-charade-950 text-base mb-8 ">
          Desde estampados{" "}
        </Badge>
        <div className="  flex flex-col justify-center gap-4">
          <h2 className=" text-8xl font-bold text-charade-950 dark:text-charade-50">
            forma de arte
          </h2>
          <p className=" text-xl text-charade-600 dark:text-charade-200 ">
            Desde estampados de camisetas personalizadas que reflejan tu estilo
            hasta la creación de páginas web estáticas elegantes que destacan tu
            presencia en línea.
          </p>
        </div>
      </article>

      <article className="bg-gradient-to-tr from-charade-500 to-charade-300 dark:from-charade-500 dark:to-charade-600  rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden min-h-96 md:min-h-max  ">
        <Image
          src={phoneImage}
          alt="imagen de mockup de camiseta estampada "
          priority
          style={{
            objectFit: "contain", // cover, contain, none
            aspectRatio: "9/16",
          }}
          className=" absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80  md:w-3/4"
        />
        <Button className=" bg-charade-950 z-10 font-bold text-base py-3">
          Comprar Ahora
        </Button>
      </article>

      <article className="  ">
        {" "}
        <Image
          src={mainImage}
          alt="imagen de mockup de camiseta estampada "
          priority
          style={{
            objectFit: "cover", // cover, contain, none
          }}
          className=" h-64 rounded-3xl"
        />
      </article>
      <article className="md:col-span-2 bg-gradient-to-tl from-charade-800 to-charade-500 dark:from-charade-500 dark:to-charade-200 text-charade-50 dark:text-charade-950 rounded-3xl p-8">
        4
      </article>
    </section>
  );
};
