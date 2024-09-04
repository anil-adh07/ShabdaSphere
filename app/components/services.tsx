import EmblaCarousel from "./carousel";
import services from "@/app/data/services.json";

const ServicesSection = () => {
  return (
    <div className="bg-lightwhite px-4 md:px-8 pb-20">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-dark leading-snug">
              Explore our Services
            </h2>
          </div>
          <div className="lg:col-span-2">
            <EmblaCarousel slides={services} options={{ loop: true }} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesSection;
