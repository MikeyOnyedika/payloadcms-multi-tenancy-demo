import { ReactNode } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import UserProvider from "./contexts/UserProvider";

export default function MainSiteLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex w-full h-full">
      <Sidebar />
      <section className="w-full h-full flex flex-col">
        <UserProvider>
          <Header />
          {children}
        </UserProvider>
      </section>
    </main >
  );
}
