"use client"
import TextInput from "@/app/components/TextInput";
import Link from "next/link"
import Header from "../components/Header";
import { FormEvent, useState } from "react";
import SubmitBtn from "@/app/components/SubmitBtn";
import { useMutation } from "@tanstack/react-query";
import { signup } from "@/app/lib";
import { SignupBody } from "@/app/types";
import { toast } from "react-hot-toast"

const initialFormState = {
  email: "",
  username: "",
  password: ""
}

export default function Signup() {

  const emailTxt = "email";
  const passwordTxt = "password";
  const usernameTxt = "username"
  const loginLink = "/login"
  const [formState, setFormState] = useState(initialFormState);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [usernameErrMsg, setUsernameErrMsg] = useState("");
  const [passwordErrMsg, setPasswordErrMsg] = useState("");

  const signupMutation = useMutation({
    mutationFn: async (body: SignupBody) => await signup(body)
  });

  function handleOnChange(update: { [key: string]: string }) {
    setFormState(prev => ({ ...prev, ...update }));
  }

  function clearErrMsgs() {
    setUsernameErrMsg("");
    setEmailErrMsg("");
    setPasswordErrMsg("");
  }

  function checkValidInputs(): boolean {
    if (!formState.username || !formState.email || !formState.password) {
      if (!formState.username) {
        setUsernameErrMsg("Username is required");
      } else {
        setUsernameErrMsg("");
      }
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
    clearErrMsgs();
    return true
  }

  async function attemptSignup(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fieldsAreValid = checkValidInputs();
    if (!fieldsAreValid) return;
    setIsAuthenticating(true)
    const res = await signupMutation.mutateAsync({ username: formState.username, password: formState.password, email: formState.email });

    if (res.status === "error") {
      if (res.error.field) {
        highlightField(res.error.field, res.error.message);
        toast.error("Some fields not filled correctly");
      } else {
        toast.error(res.error.message);
      }
    } else {
      toast.success("User account created successfully!");
    }
    setIsAuthenticating(false)
  }


  function highlightField(field: string, errorMsg: string) {
    if (field === "email") {
      setEmailErrMsg(errorMsg);
      return;
    } else {
      setEmailErrMsg("");
    }
    if (field === "username") {
      setUsernameErrMsg(errorMsg);
      return;
    } else {
      setUsernameErrMsg("");
    }
    if (field === "password") {
      setPasswordErrMsg(errorMsg);
      return;
    } else {
      setPasswordErrMsg("");
    }
  }


  return (
    <section className="flex flex-col items-center w-full gap-3">
      <Header />
      <form onSubmit={attemptSignup} className="rounded-md shadow-md p-2 md:p-6 max-w-[30rem] w-full flex flex-col gap-4">
        <h2 className="text-2xl text-center">Signup</h2>
        <TextInput label={usernameTxt} name={usernameTxt} onChange={handleOnChange} value={formState.username} errorMsg={usernameErrMsg} />
        <TextInput label={emailTxt} name={emailTxt} onChange={handleOnChange} value={formState.email} errorMsg={emailErrMsg} />
        <TextInput label={passwordTxt} name={passwordTxt} type={passwordTxt} onChange={handleOnChange} value={formState.password} errorMsg={passwordErrMsg} />
        <SubmitBtn disabled={isAuthenticating} />
        <Link href={loginLink} className="text-blue-500 hover:text-blue-700 text-center">Already have an account? Login</Link>
      </form>
    </section>
  );

}

