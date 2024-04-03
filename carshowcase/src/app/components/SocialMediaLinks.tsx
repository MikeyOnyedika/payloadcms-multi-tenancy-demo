"use client";
import Link from "next/link";
import { IconContext } from "react-icons";
import { socialLinks } from "../constants";

export default function SocialMediaLinks() {
  return (
    <section className="px-4 py-[8rem] flex flex-col gap-[4rem] max-w-[150rem] w-full bg-purple-50">
      <h2 className="text-4xl text-center font-bold">
        Follow us on Social Media
      </h2>
      <ul className="w-full flex flex-wrap justify-center gap-10">
        {socialLinks.map((item) => (
          <li key={item.id} className="flex items-center gap-2 flex-wrap">
            <Link href={item.link} className="hover:scale-110 transition-all duration-300">
              <IconContext.Provider
                value={{ className: `text-5xl`, color: item.highlight }}
              >
                <item.Icon />
              </IconContext.Provider>
              {/* <span className="text-lg">{partner.name}</span> */}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
