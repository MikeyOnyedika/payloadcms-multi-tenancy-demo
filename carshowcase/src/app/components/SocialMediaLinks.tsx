"use client";
import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "../types";

export default function SocialMediaLinks(data: SocialLinks) {
  return (
    <section className="px-4 py-[8rem] flex flex-col gap-[4rem] max-w-[150rem] w-full bg-purple-50">
      <h2 className="text-4xl text-center font-bold">{data.label}</h2>
      <ul className="w-full flex flex-wrap justify-center gap-10">
        {data.links.map((item) => (
          <li key={item.id} className="flex items-center gap-2 flex-wrap">
            <Link
              href={item.url}
              className="hover:scale-110 transition-all duration-300"
            >
              <Image src={`${process.env.NEXT_PUBLIC_CMS_BASE_URL}${item.logo.url}`} alt="" width={50} height={50} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
