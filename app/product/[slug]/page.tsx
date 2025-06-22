import { getProductBySlug } from '@/lib/getProductBySlug';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Categories from '../../components/Categories';
import AboutUsSection from '../../components/AboutUsSection';
import AddToCartPanel from '../../components/AddToCartPanel';

interface ProductPageProps {
  params: { slug: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug); 

  if (!product) return notFound();

  return (
    <section className="bg-[#fafafa]">
      <div className="px-5 lg:px-52 py-12 space-y-10">
        <Link href={`/category/${product.category}`} className="text-gray-500">
          Back
        </Link>

        <div className="grid grid-cols-3 md:grid-cols-2 gap-12 mt-5">
          <div className="flex items-center">
            <Image
              src={product.image.desktop}
              alt={product.name}
              width={540}
              height={560}
              className="rounded-lg lg:flex hidden w-full"
              priority
            />
            <Image
              src={product.image.tablet}
              alt={product.name}
              width={1500}
              height={560}
              className="rounded-lg lg:hidden md:flex hidden w-full"
              priority
            />
            <Image
              src={product.image.mobile}
              alt={product.name}
              width={540}
              height={560}
              className="rounded-lg md:hidden flex w-full"
              priority
            />
          </div>

          <div className="space-y-5 flex flex-col justify-center md:col-span-1 col-span-2">
            {product.new && (
              <p className="text-orange-500 tracking-widest text-sm uppercase">
                New Product
              </p>
            )}

            <h1 className="md:text-5xl text-2xl font-bold uppercase">
              {product.name}
            </h1>

            <p className="text-gray-500">{product.description}</p>

            <p className="text-xl">
              $ {product.price.toLocaleString(undefined, { minimumFractionDigits: 0 })}
            </p>

            <AddToCartPanel product={product} />
          </div>
        </div>

        <div className="grid md:grid-cols-3 md:gap-16 gap-7">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-5">FEATURES</h2>
            <p className="text-neutral-500 whitespace-pre-line">
              {product.features}
            </p>
          </div>

          <div className="flex lg:flex-col flex-row gap-5">
            <h2 className="text-2xl font-bold text-nowrap">IN THE BOX</h2>
            <ul className="space-y-1">
              {product.includedItems.map((itm) => (
                <li key={itm.item} className="text-neutral-500">
                  <span className="text-[#d87d4a] font-medium">{itm.quantity}x </span>
                  {itm.item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Categories />
      <AboutUsSection />
    </section>
  );
}
