'use client'
import TextInput from "@/app/components/TextInput";
import { FormEvent, useState } from "react";
import dynamic from "next/dynamic";
import { useUserContext } from "../contexts/UserProvider";
import { toast } from "react-hot-toast"
import SubmitBtn from "@/app/components/SubmitBtn";
import { useQueryClient } from "@tanstack/react-query";
import { updateUsername } from "@/app/lib";

export default function Settings() {
  const userData = useUserContext();
  const userId = userData?.user.id
  const uname = userData?.user.username
  const [username, setUsername] = useState(uname ?? "");
  const queryClient = useQueryClient();

  function onChange({ username }: { [key: string]: string }) {
    setUsername(username);
  }

  async function attemptChangeUsername(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!username) {
      toast.error("Username cannot be empty");
      return;
    }
    const res = await updateUsername({ username, userId: userId as string });
    if (res.status === "error") {
      toast.error(res.error);
    } else {
      toast.success("Username updated!");
      queryClient.invalidateQueries({ queryKey: ["videocache__users", "me"] });
    }
  }

  return (
    <section className="p-2 md:p-4 flex flex-col gap-8 max-w-section">
      <form className="flex w-full justify-between items-end gap-4" onSubmit={attemptChangeUsername}>
        <TextInput
          label={"Username"}
          name={"username"}
          placeholder="your username"
          value={username}
          onChange={onChange}
        />
        <SubmitBtn disabled={false} label="Change" />
      </form>
      <button className="bg-red-500 hover:bg-red-700 transition-colors duration-300 w-fit rounded-md h-fit px-4 py-2 text-gray-50">
        Delete Account
      </button>
    </section>
  );

}
