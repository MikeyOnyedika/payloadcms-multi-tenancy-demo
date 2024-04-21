"use client"
import TextInput from "@/app/components/TextInput";
import Header from "../components/Header";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { LoginBody } from "@/app/types";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/app/lib";
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation";
import SubmitBtn from "@/app/components/SubmitBtn";

const initialFormState = {
  email: "",
  password: ""
}


export default function Login() {

  const emailTxt = "email";
  const passwordTxt = "password";
  const signupLink = "/signup";
  const [formState, setFormState] = useState(initialFormState);

  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [passwordErrMsg, setPasswordErrMsg] = useState("");

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const router = useRouter();

  const loginMutation = useMutation({
    async mutationFn(body: LoginBody) {
      return await login(body);
    }
  });

  function handleOnChange(update: { [key: string]: string }) {
    setFormState(prev => ({ ...prev, ...update }));
  }


  function checkValidInputs(): boolean {
    if (!formState.email || !formState.password) {
      if (!formState.email) {
        setEmailErrMsg("Email is required")
      } else {
        setEmailErrMsg("")
      }
      if (!formState.password) {
        setPasswordErrMsg("Password is required");
      } else {
        setPasswordErrMsg("");
      }
      return false;
    }
    setEmailErrMsg("");
    setPasswordErrMsg("");
    return true
  }



  function highlightField(field: string, errorMsg: string) {
    if (field === "email") {
      setEmailErrMsg(errorMsg);
      return;
    } else {
      setEmailErrMsg("");
    }
    if (field === "password") {
      setPasswordErrMsg(errorMsg);
      return;
    } else {
      setPasswordErrMsg("");
    }
  }

  async function attemptLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fieldsAreValid = checkValidInputs();
    if (!fieldsAreValid) return;
    setIsAuthenticating(true)
    const res = await loginMutation.mutateAsync({ password: formState.password, email: formState.email });
    if (res.status === "error") {
      if (res.error.field) {
        highlightField(res.error.field, res.error.message);
        toast.error(res.error.message);
      } else {
        toast.error(res.error.message);
      }
    } else {
      toast.success("Login successful!");
      router.push("/videos");
    }
    setIsAuthenticating(false)
  }

  return (
    <section className="flex flex-col items-center w-full gap-3">
      <Header />
      <form onSubmit={attemptLogin} className="rounded-md shadow-md p-2 md:p-6 max-w-[30rem] w-full flex flex-col gap-4">
        <h2 className="text-2xl text-center">Login</h2>
        <TextInput label={emailTxt} name={emailTxt} onChange={handleOnChange} value={formState.email} errorMsg={emailErrMsg} />
        <TextInput label={passwordTxt} name={passwordTxt} type={passwordTxt} onChange={handleOnChange} value={formState.password} errorMsg={passwordErrMsg} />
        <SubmitBtn disabled={isAuthenticating} />
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
