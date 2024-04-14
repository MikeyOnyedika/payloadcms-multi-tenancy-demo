import { categories } from "../constants";
import Image from "next/image";
import { fetchCarCategory, fetchCarCategorySlugs } from "../lib/cms";
import { CarAlbum } from "../types";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const res = await fetchCarCategorySlugs();
  if (res.status === "success") {
    return res.data;
  }
  return [];
}

export default async function Category({ params }: Props) {
  const categorySlug = params.slug;
  const res = await fetchCarCategory(categorySlug);

  if (res.status === "error") {
    return (
      <main className="flex justify-center items-center p-4 h-full w-full">
        <p className="text-lg text-center text-gray-800 capitalize">
          {res.message}
        </p>
      </main>
    );
  }

  if (res.status === "success" && res.message) {
    return (
      <main className="flex justify-center items-center p-4 h-full w-full">
        <p className="text-lg text-center text-gray-800 capitalize">
          {res.message}
        </p>
      </main>
    );
  }

  const data = res.data as CarAlbum;
  return (
    <main className="flex flex-col w-full max-w-[150rem] gap-10 py-[4rem] px-4 h-fit">
      <h2 className="text-4xl font-bold">{data.metaData.title}</h2>
      <div className="w-full h-fit flex flex-col">
        {data.cars.map((car) => (
          <li key={car.id} className="flex relative">
            <figure className="flex w-full h-full relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_CMS_BASE_URL}${car.image.url}`}
                alt={car.image.altText}
                className="w-full h-full aspect-auto object-fill z-0 relative"
                width={car.image.width}
                height={car.image.height}
              />
              <figcaption className="absolute z-10 inset-0 bg-gray-900/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center p-4">
                <p className="text-white text-4xl">{car.modelName}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </div>
    </main>
  );
}
