import Image from "next/image";
import HeroText from "./HeroText";

export default function Hero() {
  return (
    <section className="overflow-hidden lg:px-52 md:px-16 px-5   text-white bg-[#191919]">
      <div className="" />
      <div className="lg:flex hidden items-center">
        <HeroText />
        <div className="flex justify-center w-full ">
          <Image
            width={1800}
            height={1000}
            alt="hero image"
            src={"/images/image-hero-croped.jpeg"}
            className="w-[550px] animate-fade-in-slow animate-delay-500"
          />
        </div>
      </div>
      {/* small device */}
      <div className="lg:hidden">
        <div className="flex justify-center w-full relative">
          <Image
            width={100}
            height={100}
            alt="hero image"
            src={"/images/image-hero-croped.jpeg"}
            className="w-[550px] animate-fade-in-slow animate-delay-500"
          />
        </div>
        <div className="absolute top-0">
          <HeroText />
        </div>
      </div>
    </section>
  );
}
