import { AxiosError } from "axios";
import api from "./axios.config";
import { SignupBody, SignupRequestResult, User } from "../types";

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
