import * as React from "react";
import Image from "next/image";
import mainImage from "@/assets/image_main.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full  grid place-items-center"
      plugins={[
        Autoplay({
          delay: 2500,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Image
              src={mainImage}
              alt="imagen de mockup de camiseta estampada "
              style={{
                objectFit: "cover", // cover, contain, none
                borderRadius: "16px",
                aspectRatio: "9/16",
                maxHeight: "670px",
              }}
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            {" "}
            <Image
              src={mainImage}
              alt="imagen de mockup de camiseta estampada "
              style={{
                objectFit: "cover", // cover, contain, none
                borderRadius: "16px",
                aspectRatio: "9/16",
                maxHeight: "670px",
              }}
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            {" "}
            <Image
              src={mainImage}
              alt="imagen de mockup de camiseta estampada "
              style={{
                objectFit: "cover", // cover, contain, none
                borderRadius: "16px",
                aspectRatio: "9/16",
                maxHeight: "670px",
              }}
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            {" "}
            <Image
              src={mainImage}
              alt="imagen de mockup de camiseta estampada "
              style={{
                objectFit: "cover", // cover, contain, none
                borderRadius: "16px",
                aspectRatio: "9/16",
                maxHeight: "670px",
              }}
            />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
