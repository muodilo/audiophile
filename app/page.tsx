// import Image from "next/image";

import Categories from "./components/Categories";
import Hero from "./components/Hero";
import NewProductSection from "./components/NewProductSection";

export default function Home() {
  return (
    <>
      <Hero/>
      <Categories/>
      <NewProductSection/>
    </>
  );
}
