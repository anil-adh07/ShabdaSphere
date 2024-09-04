import { FaRegFileAlt } from "react-icons/fa";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-lightwhite px-4 md:px-8 pt-52 pb-32">
      <div className=" max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="">
            <p className="bg-dimorange rounded-full py-3 px-5 max-w-max">
              * Get started with <span className="font-semibold">Shadba</span>
              Sphere *
            </p>
            <div className="text-4xl md:text-5xl lg:text-7xl font-bold leading-snug my-6">
              <h1>Find desired services from the</h1>
              <div className="inline-flex gap-2 items-center">
                <h2>best</h2>
                <div className="border border-dark rounded-full p-1 inline-flex items-center">
                  <Image
                    src="/images/avatar1.jpg"
                    alt="avatar"
                    width={600}
                    height={600}
                    className="w-14 h-14 rounded-full object-cover object-center"
                  />
                  <Image
                    src="/images/avatar2.jpg"
                    alt="avatar"
                    width={600}
                    height={600}
                    className="w-14 h-14 rounded-full object-cover object-center -ml-5"
                  />
                  <Image
                    src="/images/arrow.svg"
                    alt="arrow"
                    width={600}
                    height={600}
                    className="w-full h-full rounded-full object-cover object-center ml-3"
                  />
                </div>
              </div>
              <h2> SOP writers</h2>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              exercitationem quam numquam eius sint porro excepturi in quod
              saepe? Explicabo minus hic dignissimos aspernatur veniam!
            </p>
          </div>
          <div className="relative flex flex-col items-center mt-10 lg:mt-0">
            <div className="bg-black pr-2 pb-2 w-2/3 rounded-r-2xl">
              <Image
                src="/images/hero1.jpg"
                alt="image"
                width={600}
                height={600}
                className="w-full h-2/3 object-contain object-center rounded-r-2xl"
              />
            </div>
            <Image
              src="/images/plus-decorate.svg"
              alt="decorate"
              width={600}
              height={600}
              className="w-40 h-40 rounded-full object-contain object-center absolute -top-8 right-0 lg:right-16"
            />
            <Image
              src="/images/hero3.jpg"
              alt="image"
              width={600}
              height={600}
              className="w-40 h-40 object-contain object-center rounded-r-2xl absolute -top-8 left-0 lg:-left-10 opacity-70"
            />
            <Image
              src="/images/hero2.jpg"
              alt="image"
              width={600}
              height={600}
              className="w-40 h-40 object-contain object-center rounded-r-2xl absolute -bottom-8 right-0 lg:right-10 opacity-70"
            />
            <div className="bg-lightorange pr-2 pb-2 rounded-2xl absolute -bottom-8 left-0 lg:-left-5">
              <div className="bg-dimorange rounded-2xl p-4 flex flex-col gap-2">
                <h4 className="text-xl text-dark font-bold">
                  SOP Writing Patterns
                </h4>
                <div className="inline-flex items-center gap-2">
                  <Image
                    src="/images/avatar2.jpg"
                    alt="avatar"
                    width={600}
                    height={600}
                    className="w-14 h-14 rounded-full object-cover object-center"
                  />
                  <div className="flex flex-col gap-1">
                    <h5>Ananta Parajuli</h5>
                    <div className="inline-flex gap-2 text-xs items-center">
                      <FaRegFileAlt /> 10+ Services
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
