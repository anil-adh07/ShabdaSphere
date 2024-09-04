import Image from "next/image";

interface props {
  color?: string;
}
const Logo = ({ color }: props) => {
  return (
    <div className="inline-flex gap-2 items-center">
      <Image
        src="/images/logo22.png"
        alt="logo"
        width={1000}
        height={1000}
        className="w-12 h-full object-contain object-center"
      />
      <div className="flex flex-col gap-1 ">
        <p className="text-2xl border-b-4 border-lightyellow">
          <span className="font-semibold">Shabda</span>
          Sphere
        </p>
        <p className="text-xl">Solutions</p>
      </div>
    </div>
  );
};
export default Logo;
