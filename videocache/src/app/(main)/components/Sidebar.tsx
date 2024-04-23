"use client";
import Link from "next/link";
import {
  BsCameraVideo as VideoIcon,
  BsGear as SettingsIcon,
  BsDoorOpen as LogoutIcon,
} from "react-icons/bs";
import { IconContext } from "react-icons";
import { signOut } from "@/app/lib";
import { useMutation } from "@tanstack/react-query";

export default function Sidebar() {
  const navItems = [
    {
      name: "videos",
      url: "/videos",
      Icon: VideoIcon,
    },
    {
      name: "settings",
      url: "/settings",
      Icon: SettingsIcon,
    },
  ];

  const logoutMutation = useMutation({
    mutationFn: async () => await signOut(),
  });

  return (
    <section className="w-full max-w-[8rem] h-full shadow-md overflow-y-auto flex flex-col gap-3 p-4">
      <nav className="flex flex-col h-full w-full gap-5">
        <p className="text-blue-900 text-sm">Videocache</p>
        <ul className="flex flex-col items-start gap-2 h-full">
          {navItems.map((item) => (
            <li key={item.url} className="">
              <Link
                href={item.url}
                className="text-blue-500 hover:underline hover:text-blue-700 flex items-center gap-2"
              >
                <IconContext.Provider value={{ className: "text-xl" }}>
                  <item.Icon />
                </IconContext.Provider>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={() => {
          logoutMutation.mutate();
        }} type="button" className="text-blue-500 h-fit hover:underline hover:text-blue-700 flex items-center gap-2">
          <IconContext.Provider value={{ className: "text-xl" }}>
            <LogoutIcon />
          </IconContext.Provider>
          logout
        </button>
      </nav>
    </section>
  );
}
