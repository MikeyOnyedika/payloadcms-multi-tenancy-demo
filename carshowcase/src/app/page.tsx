import Categories from "./components/Categories";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import SocialMediaLinks from "./components/SocialMediaLinks";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full gap-10">
      <Hero />
      <Partners />
      <Categories />
      <SocialMediaLinks />
    </main>
  );
}
