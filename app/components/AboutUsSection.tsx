import Image from "next/image";
import AboutUsText from "./AboutUsText";

const AboutUsSection = () => {
  return (
    <div className="lg:px-52 px-5 bg-[#fafafa] pb-32">
      <div className="lg:grid grid-cols-2 gap-12 hidden">
        <AboutUsText/>
        <div>
          <Image
            width={1800}
            height={1000}
            alt="hero image"
            src={"/images/image-best-gear.jpg.jpeg"}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="lg:hidden">
        <div>
          <Image
            width={1800}
            height={1000}
            alt="hero image"
            src={"/images/image-best-gear.jpg_2.jpeg"}
            className="rounded-lg"
          />
        </div>
        <AboutUsText/>
      </div>
    </div>
  );
};

export default AboutUsSection;
