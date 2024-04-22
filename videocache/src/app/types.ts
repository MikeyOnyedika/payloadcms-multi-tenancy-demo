import { mode } from "./constants";

export type Theme = (typeof mode)[keyof typeof mode];

export type SignupBody = {
  username: string,
  email: string,
  password: string
}

export type LoginBody = Omit<SignupBody, "username">

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

type User = {
  id: string,
  username: string,
  email: string
}

export type LoginRequestResult = {
  status: "success",
  data: {
    exp: number,
    user: User
  }
} | {
  status: "error", error: {
    field?: string,
    message: string
  }
}


export type GetMeRequestResult = {
  status: "success",
  data: {
    exp: number,
    user: User
  },
} | {
  status: "error",
  error: string
}

export type UploadVideoRequestResult = {
  status: "success",
  data: {
    id: string,
    url: string
  }
} | {
  status: "error",
  error: string
}
