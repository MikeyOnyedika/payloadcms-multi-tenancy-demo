"use client";
import Link from "next/link";
import { FaArrowDown as ArrowDown } from "react-icons/fa";
import { IconContext } from "react-icons";
import { HeroSection } from "../types";

interface CustomCSSStyle extends React.CSSProperties {
  "--hero-img": string;
}

export default function Hero(data: HeroSection) {
  const bgImage = `${process.env.NEXT_PUBLIC_CMS_BASE_URL}${data.heroImage.url}`;

  return (
    <section
      style={{ "--hero-img": `url(${bgImage})` } as CustomCSSStyle}
      className={`bg-[image:var(--hero-img)] px-4 py-14 md:py-24 bg-cover bg-center w-full bg-no-repeat flex flex-col gap-[8rem] 
    items-center justify-center relative before:absolute before:inset-0 before:bg-purple-950/50 before:z-10`}
    >
      <h1 className="text-[2rem] md:text-[3rem] lg:text-[5rem] z-20 relative font-bold text-purple-50 text-center">
        {data.heroText.line1} <br /> {data.heroText.line2}
      </h1>
      <Link
        href={data.cta.ctaLink}
        className="bg-gray-50 hover:bg-gray-300 rounded-full px-6 py-3 text-purple-500 hover:text-purple-800 transition-colors duration-300 z-20 font-bold capitalize"
      >
        <IconContext.Provider value={{ className: "inline-block mr-2 bounce" }}>
          <ArrowDown />
        </IconContext.Provider>
        {data.cta.ctaText}
      </Link>
    </section>
  );
}
