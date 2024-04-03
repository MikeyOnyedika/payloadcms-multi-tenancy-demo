import TextInput from "@/app/components/TextInput";
import dynamic from "next/dynamic";

const ThemeSwitcher = dynamic(() => import("./components/ThemeSwitcher"), {
  ssr: false,
});

export default function Settings() {
  return (
    <section className="p-2 md:p-4 flex flex-col gap-8 max-w-section">
      <div className="flex items-center justify-between">
        <h3 className="text-lg">Theme</h3>
        <ThemeSwitcher />
      </div>
      <div className="flex w-full justify-between items-end gap-4">
        <TextInput
          label={"Username"}
          name={"username"}
          placeholder="your username"
        />
        <button className="bg-blue-500 rounded-md h-fit px-4 py-2 text-gray-50">
          Change
        </button>
      </div>
      <button className="bg-red-500 hover:bg-red-700 transition-colors duration-300 w-fit rounded-md h-fit px-4 py-2 text-gray-50">
        Delete Account
      </button>
    </section>
  );
}
