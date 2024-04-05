import Link from "next/link";
import { getHeader } from "../utils/cms";
import { responseStatus } from "../utils/cms/request.config";

export default async function Header() {
  const res = await getHeader();
  if (res.status === responseStatus.SUCCESS) {
    console.log("data: ", res.data);
    return (
      <header className="px-4 py-2 bg-purple-100 w-full">
        <Link href={"/"} className="italic font-bold text-purple-800 text-2xl">
          Carshowcase
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
