import request, { responseStatus, WEBSITE_PREFIX } from "./request.config";

export async function getHeader(): Promise<
  | { status: typeof responseStatus.SUCCESS; data: any }
  | {
      status: typeof responseStatus.ERROR;
      message: string;
    }
> {
  try {
    const { data } = await request.get(
      `/globals/${WEBSITE_PREFIX}header`
    );

    return {
      status: responseStatus.SUCCESS,
      data,
    };
  } catch (err: any) {
    const status = responseStatus.ERROR;
    let message = "";

    if (err.response) {
      const statusCode = err.response.status;
      if (statusCode === 403) {
        message = "You don't have permission to access this resource";
      } else {
        message = "Resource couldn't be fetched";
      }
    } else if (err.request) {
      message = "Make sure you have a stable internet connection";
    } else {
      message = "something went wrong. Couldn't get resource";
    }

    return {
      message,
      status,
    };
  }
}
