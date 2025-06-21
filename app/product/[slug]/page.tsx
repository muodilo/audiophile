import { getProductBySlug } from '@/lib/getProductBySlug';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <section className="px-6 lg:px-24 py-12 space-y-10">
      <Link href={`/category/${product.category}`} className="text-gray-500">← Back to {product.category}</Link>

      <div className="flex flex-col lg:flex-row gap-12">
        <Image src={product.image.desktop} alt={product.name} width={560} height={600} className="rounded-lg" />
        <div className="space-y-4">
          {product.new && <p className="text-orange-500 tracking-widest text-sm uppercase">New Product</p>}
          <h1 className="text-3xl font-bold uppercase">{product.name}</h1>
          <p className="text-gray-500">{product.description}</p>
          <p className="text-xl font-semibold">$ {product.price.toLocaleString()}</p>
        </div>
      </div>
    </section>
  );
}