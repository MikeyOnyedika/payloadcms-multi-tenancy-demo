import Link from "next/link";
import { fetchHeader } from "../lib/cms";

export default async function Header() {
  const res = await fetchHeader();
  if (res.status === "success") {
    return (
      <header className="px-4 py-2 bg-purple-100 w-full">
        <Link href={"/"} className="italic font-bold text-purple-800 text-2xl">
          {res.data.companyName}
        </Link>
      </header>
    );
  } else {
    return (
      <header className="px-4 py-2 bg-purple-100 w-full text-xs text-red-500">
        {res.message}
      </header>
    );
  }
}
