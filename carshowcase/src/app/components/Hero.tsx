"use client";
import Link from "next/link";
import { FaArrowDown as ArrowDown } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CATEGORIES_SECTION_ID } from "../constants";

export default function Hero() {
  return (
    <section
      className="bg-hero py-[8rem] px-4 bg-cover bg-center w-full bg-no-repeat flex flex-col gap-[8rem] 
    items-center justify-center relative before:absolute before:inset-0 before:bg-purple-950/50 before:z-10"
    >
      <h1 className="text-[5rem] z-20 relative font-bold text-purple-50 text-center">
        Carshowcase presents you the <br /> <strong>best</strong> cars in each
        category
      </h1>
      <Link
        href={`#${CATEGORIES_SECTION_ID}`}
        className="bg-gray-50 hover:bg-gray-300 rounded-full px-6 py-3 text-purple-500 hover:text-purple-800 transition-colors duration-300 z-20 font-bold capitalize"
      >
        <IconContext.Provider value={{ className: "inline-block mr-2 bounce" }}>
          <ArrowDown />
        </IconContext.Provider>
        explore now
      </Link>
    </section>
  );
}
