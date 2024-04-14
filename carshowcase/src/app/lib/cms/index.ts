import { AxiosError } from "axios";
import request, { WEBSITE_PREFIX } from "./request.config";
import qs from "qs";
import {
  FetchCarCategoryResponse,
  FetchCarCategorySlugsResponse,
  FetchFooterResponse,
  FetchHeaderResponse,
  FetchHomePageResponse,
  Header,
} from "@/app/types";

export async function fetchHeader(): Promise<FetchHeaderResponse> {
  try {
    const url = `/globals/${WEBSITE_PREFIX}header`;
    const { data } = await request.get(url);

    return {
      status: "success",
      data,
    };
  } catch (er: any) {
    const status = "error";
    const err = er as AxiosError;
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

export async function fetchHomePage(): Promise<FetchHomePageResponse> {
  try {
    const query = {
      slug: {
        equals: "home",
      },
    };

    const stringifiedQuery = qs.stringify(
      {
        where: query,
      },
      {
        addQueryPrefix: true,
      }
    );

    const { data } = await request.get(
      `/${WEBSITE_PREFIX}pages${stringifiedQuery}`
    );
    return {
      status: "success",
      data,
    };
  } catch (er) {
    const status = "error";
    const err = er as AxiosError;
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
      message = "Something went wrong. Couldn't get resource";
    }

    return {
      message,
      status,
    };
  }
}

export async function fetchFooter(): Promise<FetchFooterResponse> {
  try {
    const url = `/globals/${WEBSITE_PREFIX}footer`;
    const { data } = await request.get(url);

    return {
      status: "success",
      data,
    };
  } catch (er: any) {
    const status = "error";
    const err = er as AxiosError;
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

export async function fetchCarCategory(
  slug: string
): Promise<FetchCarCategoryResponse> {
  try {
    const query = {
      slug: {
        equals: slug,
      },
    };

    const stringifiedQuery = qs.stringify(
      {
        where: query,
      },
      {
        addQueryPrefix: true,
      }
    );

    const { data } = await request.get(
      `/${WEBSITE_PREFIX}car_albums${stringifiedQuery}`
    );

    const result = data.docs;
    if (result.length === 0) {
      return {
        status: "success",
        message: "Car Category not found",
      };
    }
    return {
      status: "success",
      data: data.docs[0],
    };
  } catch (er) {
    const status = "error";
    const err = er as AxiosError;
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
      message = "Something went wrong. Couldn't get resource";
    }

    return {
      message,
      status,
    };
  }
}

export async function fetchCarCategorySlugs(): Promise<FetchCarCategorySlugsResponse> {
  try {
    const { data } = await request.get(`/${WEBSITE_PREFIX}car_albums`);

    const result = data.docs;
    if (result.length === 0) {
      return {
        status: "success",
        data: [],
      };
    }
    return {
      status: "success",
      data: data.docs.map((doc: any) => ({ slug: doc.slug })),
    };
  } catch (er) {
    return {
      status: "error",
      message: "Failed to get car albums slugs",
    };
  }
}
