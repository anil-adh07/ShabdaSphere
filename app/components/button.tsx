import Link from "next/link";
interface buttonprops {
  title: string;
  link: string;
  classnames?: string;
}

const ButtonLink = ({ title, link, classnames }: buttonprops) => {
  return (
    <Link
      href={link}
      className={`px-4 py-3 ${
        classnames
          ? classnames
          : "text-white bg-dark hover:text-dark hover:bg-lightgreeen"
      } text-lg rounded-lg duration-500 transition-all`}
    >
      {title}
    </Link>
  );
};
export default ButtonLink;
