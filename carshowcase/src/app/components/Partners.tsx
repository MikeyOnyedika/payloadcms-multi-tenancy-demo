"use client";
import Image from "next/image";
import { PartnersSection } from "../types";

export default function Partners(data: PartnersSection) {
  return (
    <section className="px-4 py-[8rem] flex flex-col gap-[4rem] max-w-[150rem] w-full bg-purple-50">
      <h2 className="text-4xl text-center font-bold">{data.label}</h2>
      <ul className="w-full flex flex-wrap justify-center gap-10">
        {data.partners.map((partner) => (
          <li key={partner.id} className="flex items-center gap-2 flex-wrap">
            <Image
              src={`${process.env.NEXT_PUBLIC_CMS_BASE_URL}${partner.logo.url}`}
              alt=""
              className={""}
              width={100}
              height={100}
            />
            {/* <span className="text-lg">{partner.name}</span> */}
          </li>
        ))}
      </ul>
    </section>
  );
}
