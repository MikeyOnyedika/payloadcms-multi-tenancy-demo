import { AxiosError } from "axios";
import api from "./axios.config";
import { GetMeRequestResult, LoginBody, LoginRequestResult, SignupBody, SignupRequestResult, UploadVideoRequestResult } from "../types";

export async function signup(body: SignupBody): Promise<SignupRequestResult> {
  try {
    const { data } = (await api.post("/videocache__users", body)) as any;
    const doc = data.doc
    return {
      status: "success",
      data: {
        user: {
          id: doc.id,
          username: doc.username,
          email: doc.email
        }
      }
    }
  } catch (er) {
    const status = "error"
    const err = er as AxiosError

    if (err.response) {
      const statusCode = err.response.status
      const error = (err.response.data as any).errors
      if (statusCode === 400) {
        return {
          status,
          error: {
            message: error[0].data[0].message,
            field: error[0].data[0].field
          }
        }
      }
      return {
        status,
        error: {
          message: error[0].message,
        }
      }
    }

    if (err.request) {
      return {
        status,
        error: {
          message: "Couldn't complete request"
        }
      }
    }

    return {
      status,
      error: {
        message: err.message
      }
    }
  }
}


export async function login(body: LoginBody): Promise<LoginRequestResult> {
  try {
    const { data } = (await api.post("/videocache__users/login", body)) as any;
    const user = data.user
    return {
      status: "success",
      data: {
        exp: data.exp,
        user: {
          id: user.id,
          username: user.username,
          email: user.email
        }
      }
    }
  } catch (er) {
    const status = "error"
    const err = er as AxiosError
    if (err.response) {
      const statusCode = err.response.status
      const res = err.response.data as any
      const error = res.errors
      switch (statusCode) {
        case 400:
          return {
            status,
            error: {
              message: error[0].data[0].message,
              field: error[0].data[0].field
            }
          }
        default:
          return {
            status,
            error: {
              message: error[0].message
            }
          }
      }

    }
    if (err.request) {
      return {
        status,
        error: {
          message: "Couldn't complete request"
        }
      }
    }
    return {
      status,
      error: {
        message: err.message
      }
    }
  }
}

export async function uploadVideo({
  video, updateProgress, userId, signal
}: {
  video: File, updateProgress: (update: number) => void, userId: string, signal: AbortSignal
}): Promise<UploadVideoRequestResult> {
  try {
    const formData = new FormData();
    formData.append("owner", userId);
    formData.append("file", video);
    const { data } = await api.post("/videocache__videos", formData, {
      onUploadProgress: (progressEvent) => {
        if (progressEvent.progress) {
          const progress = Math.round(progressEvent.progress * 100);
          updateProgress(progress);
        }
      },
      signal
    });

    return {
      status: "success",
      data: {
        id: data.doc.id,
        url: data.doc.url,
      }
    }
  } catch (er) {
    const status = "error"
    const err = er as AxiosError
    if (err.response) {
      return {
        status,
        error: "Couldn't upload video"
      }
    }

    if (err.request) {
      return {
        status,
        error: "Couldn't complete request"
      }
    }

    return {
      status,
      error: err.message
    }
  }
}


export async function getMe(): Promise<GetMeRequestResult> {
  try {
    const { data } = await api.get("/videocache__users/me");
    if (data.user) {
      return {
        status: "success",
        data: {
          exp: data.exp,
          user: {
            id: data.user.id,
            username: data.user.username,
            email: data.user.email
          }
        }
      }
    }

    return {
      status: "error",
      error: "Couldn't find user",
    }

  } catch (err) {
    return {
      status: "error",
      error: "Something went wrong."
    }

  }
}