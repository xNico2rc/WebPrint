import { motion } from "framer-motion";
import Image from "next/image";
import mainImage from "@/assets/image_main.jpg";
import { ButtonDemo } from "@/components/ButtonAction";

export const Main = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      className=" flex flex-col items-center justify-center mx-auto "
    >
      <section className=" w-full flex flex-col items-center justify-center max-w-screen-2xl ">
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <motion.h1
            initial={{ y: 250 }}
            animate={{ y: 0 }}
            transition={{ duration: 2, ease: [0.33, 1, 0.68, 1], delay: 0.5 }}
            className=" text-6xl md:text-8xl lg:text-9xl xl:text-[200px] font-bold uppercase mt-8 xl:mt-0"
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
          initial={{ y: 270, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
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
            Desde estampados de camisetas personalizadas que reflejan tu estilo
            hasta la creación de páginas web estáticas elegantes que destacan tu
            presencia en línea.
          </p>{" "}
        </article>
        <h4 className=" font-bold text-2xl">Desde estampados </h4>
      </section>
    </motion.section>
  );
};
