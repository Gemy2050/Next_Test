import axios from "axios";
const BASE_URL = "http://kidskiosk.runasp.net/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
