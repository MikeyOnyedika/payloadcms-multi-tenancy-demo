import { mode } from "./constants";

export type Theme = (typeof mode)[keyof typeof mode];

export type SignupBody = {
  username: string,
  email: string,
  password: string
}

export type LoginBody = Omit<SignupBody, "username">

type User = {
  collection: string,
  user: {
    id: string,
    username: string,
  },
  exp: number,
  token: string
}

export type SignupRequestResult = {
  status: "success",
  data: {
    user: {
      id: string,
      username: string,
      email: string
    }
  }
} | {
  status: "error", error: {
    field?: string,
    message: string
  }
}


export type LoginRequestResult = {
  status: "success",
  data: {
    exp: number,
    user: {
      id: string,
      username: string,
      email: string
    }
  }
} | {
  status: "error", error: {
    field?: string,
    message: string
  }
}
