"use client";
import { IconContext } from "react-icons";
import {
  FaGoogle as Google,
  FaAmazon as Amazon,
  FaUber as Uber,
} from "react-icons/fa";

const partners = [
  {
    id: "ksldfksdf",
    image: Google,
    name: "google",
  },
  {
    id: "iiwwkwwjwk",
    image: Amazon,
    name: "amazon",
  },
  {
    id: "wkwjwi22j",
    image: Uber,
    name: "uber",
  },
];

export default function Partners() {
  return (
    <section className="px-4 py-[8rem] flex flex-col gap-[4rem] max-w-[150rem] w-full bg-purple-50">
      <h2 className="text-4xl text-center font-bold">Our Partners</h2>
      <ul className="w-full flex flex-wrap justify-center gap-10">
        {partners.map((partner) => (
          <li key={partner.id} className="flex items-center gap-2 flex-wrap">
            <IconContext.Provider value={{ className: "text-5xl" }}>
              <partner.image />
            </IconContext.Provider>
            <span className="text-lg">{partner.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
