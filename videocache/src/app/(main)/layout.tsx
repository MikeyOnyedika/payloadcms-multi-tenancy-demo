import { ReactNode } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function MainSiteLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex w-full h-full">
      <Sidebar />
      <section className="w-full h-full flex flex-col">
        <Header />
        {children}
      </section>
    </main >
  );
}
