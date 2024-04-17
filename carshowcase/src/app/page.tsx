import Categories from "./components/Categories";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import SocialMediaLinks from "./components/SocialMediaLinks";
import { fetchHomePage } from "./lib/cms";

export default async function Home() {
  const res = await fetchHomePage();
  if (res.status === "success") {
    const hero = res.data.docs[0].content[0];
    const partners = res.data.docs[0].content[1];
    const socialLinks = res.data.docs[0].content[2];
    const categories = res.data.docs[0].content[3];
    return (
      <main className="flex flex-col items-center w-full gap-10">
        <Hero {...hero} />
        <Partners {...partners} />
        <Categories {...categories} />
        <SocialMediaLinks {...socialLinks} />
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center w-full gap-10 justify-center">
      <p className="text-xl text-gray-500">{res.message}</p>
    </main>
  );
}
