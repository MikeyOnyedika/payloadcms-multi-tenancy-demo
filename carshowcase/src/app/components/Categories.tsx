import { categories } from "../constants";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES_SECTION_ID } from "../constants";

export default function Categories() {
  return (
    <section
      id={CATEGORIES_SECTION_ID}
      className="px-4 py-[8rem] flex flex-col gap-[4rem] max-w-[150rem] w-full"
    >
      <h2 className="text-4xl text-center font-bold">Categories</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <li key={category.id} className="w-full flex">
            <Link
              href={`/${category.slug}`}
              className="relative text-xl flex justify-center items-center border-2 border-purple-200 hover:border-purple-500 transition-colors duration-300 rounded-md py-5 px-4  w-full aspect-video
              before:absolute before:inset-0 before:bg-purple-900/50 before:z-10 before:opacity-0 before:transition-colors before:duration-300 hover:before:opacity-100"
            >
              <h3 className="relative text-2xl text-center font-bold text-gray-50 z-10">
                {category.title}
              </h3>
              <Image
                src={category.cars[0].image}
                alt=""
                className="absolute inset-0 w-full h-full rounded-md object-cover z-0 hover:scale-110"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
