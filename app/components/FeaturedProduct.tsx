import Image from "next/image";
import React from "react";

const FeaturedProduct = () => {
  return (
    <div className="lg:px-52 px-5 bg-[#fafafa] pb-10">
      <div className="relative mb-10">
        <Image
          width={200}
          height={200}
          alt="New Product"
          src={"/images/image-speaker-zx7.jpg.jpeg"}
          className=" w-full hidden lg:flex"
        />
        {/* <Image
          width={200}
          height={1000}
          alt="New Product"
          src={"/images/image-speaker-zx7.jpg_1.jpeg"}
          className=" w-full lg:hidden md:flex hidden"
        /> */}
        <Image
          width={200}
          height={200}
          alt="New Product"
          src={"/images/image-speaker-zx7.jpg_2.jpeg"}
          className=" w-full lg:hidden flex"
        />

        <div className="absolute bottom-1/3 px-16 ">
          <h1 className="text-3xl font-bold mb-5">ZX7 SPEAKER</h1>
          <button className="text-sm border px-5 py-2">SEE PRODUCT</button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:gap-12 mb-7 gap-5">
        <div>
          <Image
            width={1000}
            height={1000}
            alt="New Product"
            src={"/images/image-earphones-yx1.jpg_2.jpeg"}
            className=" w-full lg:h-[320px] md:h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className=" rounded-lg gap-7 px-5  bg-[#f1f1f1] flex flex-col justify-center">
          <h1 className="text-3xl font-bold">YX1 EARPHONES</h1>
          <div>
            <button className="text-sm border px-5 py-2">SEE PRODUCT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
