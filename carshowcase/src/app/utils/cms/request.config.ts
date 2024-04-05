import axios from "axios";

export const WEBSITE_PREFIX = "carshowcase__";

export const responseStatus = {
  SUCCESS: "success",
  ERROR: "error",
} as const;

const api = axios.create({
  baseURL: process.env.CMS_BASE_URL,
});

export default api;
