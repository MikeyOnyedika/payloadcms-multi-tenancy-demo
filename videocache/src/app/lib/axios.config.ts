import axios from "axios";


const apiBaseURL = process.env.NEXT_PUBLIC_CMS_API_BASE as string

const api = axios.create({
  baseURL: apiBaseURL,
  withCredentials: true
})

export default api
