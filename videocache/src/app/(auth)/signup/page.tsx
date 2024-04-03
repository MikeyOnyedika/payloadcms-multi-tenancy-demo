import TextInput from "@/app/components/TextInput";
import Link from "next/link"
import Header from "../components/Header";

export default function Signup() {
  const emailTxt = "email";
  const passwordTxt = "password";
  const usernameTxt = "username"
  const loginLink = "/login"

  return (
    <section className="flex flex-col items-center w-full gap-3">
      <Header />
      <form className="rounded-md shadow-md p-2 md:p-6 max-w-[30rem] w-full flex flex-col gap-4">
        <h2 className="text-2xl text-center">Signup</h2>
        <TextInput label={usernameTxt} name={usernameTxt} />
        <TextInput label={emailTxt} name={emailTxt} />
        <TextInput label={passwordTxt} name={passwordTxt} type={passwordTxt} />
        <button className="bg-blue-500 hover:bg-blue-700 rounded-md text-white p-2">
          submit
        </button>
        <Link href={loginLink} className="text-blue-500 hover:text-blue-700 text-center">Already have an account? Login</Link>
      </form>
    </section>
  );
}

