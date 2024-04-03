import TextInput from "@/app/components/TextInput";
import Header from "../components/Header";
import Link from "next/link";

export default function Login() {
  const emailTxt = "email";
  const passwordTxt = "password";
  const signupLink = "/signup";

  return (
    <section className="flex flex-col items-center w-full gap-3">
      <Header />
      <form className="rounded-md shadow-md p-2 md:p-6 max-w-[30rem] w-full flex flex-col gap-4">
        <h2 className="text-2xl text-center">Login</h2>
        <TextInput label={emailTxt} name={emailTxt} />
        <TextInput label={passwordTxt} name={passwordTxt} type={passwordTxt} />
        <button className="bg-blue-500 hover:bg-blue-700 rounded-md text-white p-2">
          submit
        </button>

        <Link
          href={signupLink}
          className="text-blue-500 hover:text-blue-700 text-center"
        >
          Don&apos;t have an account? Signup
        </Link>
      </form>
    </section>
  );
}
