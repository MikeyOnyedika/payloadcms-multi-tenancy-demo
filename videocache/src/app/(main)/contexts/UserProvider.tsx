"use client"

import { getMe } from "@/app/lib"
import { User } from "@/app/types"
import { useQuery } from "@tanstack/react-query"
import { redirect, useRouter } from "next/navigation"
import { ReactNode, createContext, useContext, useEffect, useState } from "react"

type UserData = {
  exp: number,
  user: User
}

const UserContext = createContext<UserData | null>(null);

export function useUserContext() {
  return useContext(UserContext);
}

export default function UserProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { data } = useQuery({
    queryKey: ["videocache__users", "me"],
    queryFn: async () => await getMe(),
    refetchInterval: 5000 //refetch every 5 seconds
  });
  let userData: UserData | null = null;

  useEffect(() => {
    if (data?.status === "error") {
      router.push("/login");
    }
  }, [data, router]);

  if (data?.status === "success") {
    userData = data.data
  } else {
    userData = null;
  }

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  )
}
