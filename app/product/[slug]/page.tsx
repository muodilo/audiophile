import { getProductBySlug } from "@/lib/getProductBySlug";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Categories from "@/app/components/Categories";
import AboutUsSection from "@/app/components/AboutUsSection";

type Params = Promise<{ slug: string }>;

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;

  const product = getProductBySlug(slug);
  if (!product) return notFound();

  return (
    <section className=" bg-[#fafafa]">
      <div className="px-5 lg:px-52 py-12 space-y-10">
        <Link
          href={`/category/${product.category}`}
          className="text-gray-500 pb-7"
        >
          Go Back
        </Link>

        <div className="grid grid-cols-3 md:grid-cols-2 gap-12 mt-5">
          <div className="flex items-center">
            <Image
              src={product.image.desktop}
              alt={product.name}
              width={540}
              height={560}
              className="rounded-lg lg:flex hidden w-full"
            />
            <Image
              src={product.image.tablet}
              alt={product.name}
              width={1800}
              height={560}
              className="rounded-lg lg:hidden md:flex hidden w-full"
            />
            <Image
              src={product.image.tablet}
              alt={product.name}
              width={540}
              height={560}
              className="rounded-lg md:hidden flex w-full"
            />
          </div>
          <div className="space-y-5 flex flex-col justify-center md:col-span-1 col-span-2 ">
            {product.new && (
              <p className="text-orange-500 tracking-widest text-sm uppercase">
                New Product
              </p>
            )}
            <h1 className="md:text-5xl text-2xl font-bold uppercase">
              {product.name}
            </h1>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-xl">$ {product.price.toLocaleString()}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 md:gap-16 gap-7">
          <div className="md:col-span-2">
            <h1 className="text-2xl font-bold mb-5">FEATURES</h1>
            <p className="text-neutral-500">{product.features}</p>
          </div>
          <div className="flex lg:flex-col flex-row gap-5">
            <h1 className="text-2xl font-bold  text-nowrap ">IN THE BOX</h1>
            <ul>
              {product.includedItems.map((item) => (
                <li key={item.item} className="text-neutral-500">
                  <span className="text-[#d87d4a]"> {item.quantity}X</span>{" "}
                  {item.item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Categories />
      <AboutUsSection/>
    </section>
  );
}
