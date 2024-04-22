"use client";

import { usePathname } from "next/navigation";
import { BsPerson as PersonIcon } from "react-icons/bs";
import Link from "next/link";
import { IconContext } from "react-icons";
import { useUserContext } from "../contexts/UserProvider";

export default function Header() {
  const pathname = usePathname();
  const title = decodeURIComponent(pathname?.split("/").at(-1) as string);
  const settingsLink = "/settings";
  const userData = useUserContext();
  const username = userData?.user.username

  return (
    <header className="shadow-md p-2 md:p-4 flex justify-between w-full items-center">
      <h1 className=" text-blue-600 text-2xl">{title}</h1>
      <Link href={settingsLink} className="flex items-center gap-2">
        <IconContext.Provider value={{ className: "text-2xl" }}>
          <PersonIcon />
        </IconContext.Provider>
        {username}
      </Link>
    </header>
  );
}
