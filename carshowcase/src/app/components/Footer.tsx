import { fetchFooter } from "../lib/cms";

export default async function Footer() {
  const res = await fetchFooter();
  if (res.status === "success") {
    return (
      <footer className="py-[4rem] px-4 bg-purple-200 w-full">
        <p
          className="text-center font-bold text-lg"
          dangerouslySetInnerHTML={{ __html: res.data.copyrightNotice }}
        ></p>
      </footer>
    );
  }
  return (
    <footer className="py-[4rem] px-4 bg-purple-200 w-full">
      <p className="text-center font-bold text-lg text-red-400">
        Failed to load
      </p>
    </footer>
  );
}
