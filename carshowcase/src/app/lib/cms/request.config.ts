import axios from "axios";

export const WEBSITE_PREFIX = "carshowcase__";

const apiKey = process.env.CMS_API_KEY

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CMS_BASE_API_URL,
  headers: {
    Authorization: `users API-Key ${apiKey}`
  }
});

export default api;
