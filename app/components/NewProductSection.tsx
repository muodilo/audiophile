import Image from "next/image";
import Link from "next/link";

const NewProductSection = () => {
  return (
    <div className="lg:px-52 px-5  pb-16  text-white bg-[#fafafa]">
      <div
        className=" overflow-hidden lg:gap-16 bg-no-repeat object-  lg:pb-0 pb-16 gap-5 bg-[#d87d4a] pt-16 rounded-lg grid lg:grid-cols-2"
        style={{ backgroundImage: "url('/images/pattern-circles.svg')" }}
      >
        <div className=" lg:relative lg:flex items-center hidden justify-center">
          <Image
            width={1000}
            height={1000}
            alt="New Product"
            src={"/images/image-speaker-zx9.png"}
            className="  w-100 left-30 -bottom-2"
          />
        </div>
        <div className="lg:hidden flex items-center justify-center">
            <Image
            width={200}
            height={200}
            alt="New Product"
            src={"/images/image-speaker-zx9.png"}
            className=" "
          />
        </div>
        <div className="flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-5xl font-bold tracking-widest">ZX9</h1>
          <h1 className="text-5xl font-bold tracking-widest">SPEAKERS</h1>
          <p className="font-light lg:px-0 px-16 lg:text-left text-center text-white/60 lg:pr-[110px] mb-7">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <div>
            <Link
          href={`/product/zx9-speaker`}
          className="inline-block mt-4 px-6 py-3 bg-[#000000] hover:bg-[#343434] duration-200 text-white font-semibold uppercase rounded "
        >
          SEE PRODUCT
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductSection;
