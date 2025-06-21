import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

export default function ProductCard({
  product,
  reversed = false,
}: {
  product: Product;
  reversed?: boolean;
}) {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        reversed ? "lg:flex-row-reverse" : ""
      } gap-12 items-center`}
    >
      <div className="overflow-hidden">
        <Image
          src={product.image.desktop}
          alt={product.name}
          width={540}
          height={560}
          className="rounded-lg lg:flex hidden"
        />
        <Image
          src={product.image.mobile}
          alt={product.name}
          width={1800}
          height={560}
          className="rounded-lg lg:hidden md:flex hidden w-full"
        />
        <Image
          src={product.image.mobile}
          alt={product.name}
          width={540}
          height={560}
          className="rounded-lg md:hidden w-full"
        />
      </div>
      <div className="text-center lg:text-left space-y-4 lg:max-w-lg">
        {product.new && (
          <p className="text-orange-500 tracking-widest text-sm uppercase">
            New Product
          </p>
        )}
        <h2 className="text-3xl font-bold uppercase">{product.name}</h2>
        <p className="text-gray-500">{product.description}</p>
        <Link
          href={`/product/${product.slug}`}
          className="inline-block mt-4 px-6 py-3 bg-orange-500 text-white font-semibold uppercase rounded hover:bg-orange-600"
        >
          See Product
        </Link>
      </div>
    </div>
  );
}
