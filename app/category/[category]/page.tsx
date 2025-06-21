import { getProductsByCategory } from "@/lib/getProductsByCategory";
import ProductCard from "@/app/components/ProductCard";
import Header from "@/app/components/Header";
import Categories from "@/app/components/Categories";
import AboutUsSection from "@/app/components/AboutUsSection";
import { notFound } from "next/navigation";

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const products = getProductsByCategory(params.category);

  if (products.length === 0) return notFound();

  return (
    <main>
      <Header category={params.category} />
      <div className="grid">
        <div className="lg:px-52 px-5 py-16 grid gap-16 bg-[#fafafa]">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} reversed={i % 2 === 1} />
          ))}
        </div>

        <Categories />
        <AboutUsSection />
      </div>
    </main>
  );
}
