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

export type User = {
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

export type Video = {
  id: string,
  owner: User,
  filename: string,
  mimeType: string,
  filesize: number,
  url: string
}

export type FetchVideosRequestResult = {
  status: "success",
  data: {
    videos: Video[]
  }
} | {
  status: "error",
  error: string
}

export type FetchVideoRequestResult = {
  status: "success",
  data: {
    video: Video
  }
} | {
  status: "error",
  error: string
}

export type UpdateUsernameRequestResult = {
  status: "success",
  data: {
    username: string,
    id: string
  }
} | {
  status: "error",
  error: string
}
