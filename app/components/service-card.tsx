import Image from "next/image";
import Link from "next/link";

interface categoryprops {
  title: string;
  slug: string;
  icon: string;
  bgcolor: string;
}

const CategoryCard = ({ title, icon, bgcolor, slug }: categoryprops) => {
  return (
    <Link href={`/course-category/${slug}`}>
      <div className="rounded-2xl bg-transparent hover:bg-dark pr-2 pb-2 h-64">
        <div className={`bg-${bgcolor} rounded-2xl p-6 h-full z-20`}>
          <div className="bg-dimgray/40 w-20 h-20 rounded-full inline-flex justify-center items-center p-4">
            <Image
              src={icon}
              alt="image"
              width={600}
              height={600}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <h3 className="pt-14 text-xl text-dark font-semibold">{title}</h3>
        </div>
        <div className="bg-dimgreen"></div>
        <div className="bg-dimyellow"></div>
        <div className="bg-dimpurple"></div>
        <div className="bg-dimorange"></div>
      </div>
    </Link>
  );
};
export default CategoryCard;
