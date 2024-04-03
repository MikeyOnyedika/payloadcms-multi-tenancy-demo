import Link from "next/link";

export default function Header() {
  return (
    <header className="px-4 py-2 bg-purple-100 w-full">
      <Link href={"/"} className="italic font-bold text-purple-800 text-2xl">
        Carshowcase
      </Link>
    </header>
  );
}
