import { categories } from "../constants";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export default function Category({ params }: Props) {
  const categorySlug = params.slug;
  const category = categories.find((item) => item.slug === categorySlug);

  return (
    <main className="flex flex-col w-full max-w-[150rem] gap-10 py-[4rem] px-4 h-fit">
      <h2 className="text-4xl font-bold">Category 1</h2>
      <div className="w-full h-fit flex flex-col">
        {category?.cars.map((car) => (
          <li key={car.id} className="flex relative">
            <figure className="flex w-full h-full relative">
              <Image
                src={car.image}
                alt=""
                className="w-full h-full aspect-auto object-fill z-0 relative"
              />
              <figcaption className="absolute z-10 inset-0 bg-gray-900/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center p-4">
                <p className="text-white text-4xl">{car.name}</p> 
              </figcaption>
            </figure>
          </li>
        ))}
      </div>
    </main>
  );
}
