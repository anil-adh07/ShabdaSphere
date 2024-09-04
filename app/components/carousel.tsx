"use client";

import { BsArrowLeftCircle } from "react-icons/bs";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { ReactElement, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import CategoryCard from "./service-card";
// import TestimonialsCard from "./testimonials-card";

interface categorydata {
  icon: string;
  title: string;
  bgcolor: string;
  slug: string;
}
interface testimonialsdata {
  message: string;
  name: string;
  designation: string;
  image: string;
}

type slideType = categorydata | testimonialsdata;
type PropType = {
  slides: slideType[];
  options?: EmblaOptionsType;
  classname?: string;
  icon?: ReactElement;
};

const EmblaCarousel = ({ slides, options, classname, icon }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div
        className={`${
          Array.isArray(slides) && slides[0]?.hasOwnProperty("icon")
            ? "embla"
            : "embla_testimonials"
        }`}
      >
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((item, index) => (
              <div className="embla__slide" key={index}>
                {"icon" in item ? (
                  <CategoryCard
                    key={index}
                    slug={item.slug}
                    icon={item.icon}
                    title={item.title}
                    bgcolor={item.bgcolor}
                  />
                ) : (
                  <></>
                  //   <TestimonialsCard
                  //     key={index}
                  //     avatar={item.image}
                  //     desig={item.designation}
                  //     message={item.message}
                  //     name={item.name}
                  //   />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`${
          classname ? classname : " flex flex-row"
        } text-5xl mt-8 px-8`}
      >
        <div
          onClick={scrollPrev}
          className="w-16 h-16 group cursor-pointer duration-100 transition-all"
        >
          {icon ? icon : <BsArrowLeftCircle />}
        </div>
        <div
          onClick={scrollNext}
          className="w-16 h-16 group cursor-pointer duration-100 transition-all"
        >
          <p className="rotate-180">{icon ? icon : <BsArrowLeftCircle />}</p>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
