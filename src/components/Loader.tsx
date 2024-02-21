"use client";
import mainImage from "@/assets/image_main.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

export const Loader = () => {
  const initial = {
    scale: 1.5,
    opacity: 0,
  };
  const animate = {
    scale: 1,
    opacity: 1,
  };
  const transition = { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 };

  return (
    <motion.div className=" fixed bg-white top-0 left-0 w-[100dvw] z-[51] h-screen grid grid-cols-3 gap-16">
      {" "}
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        className="  flex justify-end items-end h-full"
      >
        <Image
          src={mainImage}
          alt=""
          className=" w-1/3 aspect-[9/16] object-cover "
        />
      </motion.div>
      <motion.div className=" row-span-2  flex justify-center items-center">
        <Image src={mainImage} alt="" className="  aspect-video " />
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        className="  flex justify-start items-end h-full"
      >
        <Image
          src={mainImage}
          alt=""
          className=" w-1/3 aspect-[9/16] object-cover "
        />
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        className="  flex justify-end items-start h-full"
      >
        <Image src={mainImage} alt="" className=" w-1/2 aspect-video " />
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        className="  h-full"
      >
        <Image src={mainImage} alt="" className=" w-1/2 aspect-video " />
      </motion.div>
    </motion.div>
  );
};
