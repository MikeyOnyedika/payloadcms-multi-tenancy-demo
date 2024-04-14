import Image from "next/image";
import Link from "next/link";
import { CATEGORIES_SECTION_ID } from "../constants";
import { CarAlbumsPreview } from "../types";

export default function Categories(data: CarAlbumsPreview) {
  return (
    <section
      id={CATEGORIES_SECTION_ID}
      className="px-4 py-[8rem] flex flex-col gap-[4rem] max-w-[150rem] w-full"
    >
      <h2 className="text-4xl text-center font-bold">{data.label}</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.albums.map((album) => {
          const imgSrc = `${process.env.NEXT_PUBLIC_CMS_BASE_URL}${album.backgroundImage.sizes.large.url}`;
          return (
            <li key={album.id} className="w-full flex">
              <Link
                href={`/${album.slug}`}
                className="relative text-xl flex justify-center items-center border-2 border-purple-200 hover:border-purple-500 transition-colors duration-300 rounded-md py-5 px-4  w-full aspect-video
              before:absolute before:inset-0 before:bg-purple-900/50 before:z-10 before:opacity-0 before:transition-colors before:duration-300 hover:before:opacity-100"
              >
                <h3 className="relative text-2xl text-center font-bold text-gray-50 z-10">
                  {album.metaData.title}
                </h3>
                <Image
                  src={imgSrc}
                  alt={"alt text"}
                  className="absolute inset-0 w-full h-full rounded-md object-cover z-0 hover:scale-110"
                  width={500}
                  height={500}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
