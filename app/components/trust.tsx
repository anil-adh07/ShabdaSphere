import Image from "next/image";
import ButtonLink from "./button";
import { FaHeart, FaStar } from "react-icons/fa";

const TrustSection = () => {
  const arr = Array(5).fill(<></>);
  return (
    <div className="bg-lightwhite px-4 md:px-8 pb-20">
      <div className="bg-dimgreen rounded-2xl px-10 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 py-14 md:py-20">
        <div className="flex flex-col gap-10">
          <h3 className="text-2xl md:text-4xl font-semibold text-dark text-left leading-snug lg:max-w-sm">
            Trusted by the 2,000+ happy students and online users since 2024
          </h3>
          <ButtonLink
            title="Join our community"
            link="/contact"
            classnames="bg-lightgreeen text-white hover:bg-lightpurple max-w-max"
          />
        </div>
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-2 gap-5 items-start justify-start">
            <div className="flex flex-col gap-4 items-start justify-start">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold underline text-dark">
                10K
              </h3>
              <div className="inline-flex gap-2">
                {arr.map((data, index) => (
                  <FaHeart key={`${data}-${index}`} className="text-red-500" />
                ))}
              </div>
              <p className="text-left">world wide students love us</p>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold underline text-dark">
                4.7
              </h3>
              <div className="inline-flex gap-2">
                {arr.map((data, index) => (
                  <FaStar
                    key={`${data}-${index}`}
                    className="text-yellow-500"
                  />
                ))}
              </div>
              <p className="text-left">1456 user review by Google</p>
            </div>
          </div>
          <div className="bg-white p-2 rounded-xl inline-flex gap-4 items-center text-left max-w-max">
            <Image
              src="/images/avatar1.jpg"
              alt="avatar"
              width={500}
              height={500}
              className="w-12 h-12 object-cover object-center rounded-full"
            />
            <p className="text-lg max-w-sm pr-2">
              “All services are helpful to achieve desired goals”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrustSection;
