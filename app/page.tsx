

import AboutUsSection from "./components/AboutUsSection";
import Categories from "./components/Categories";
import FeaturedProduct from "./components/FeaturedProduct";
import Hero from "./components/Hero";
import NewProductSection from "./components/NewProductSection";

export default function Home() {
  return (
    <>
      <Hero/>
      <Categories/>
      <NewProductSection/>
      <FeaturedProduct/>
      <AboutUsSection/>
    </>
  );
}
