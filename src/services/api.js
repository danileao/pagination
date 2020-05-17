import axios from "axios";

const api = axios.create({
  baseURL: "http://134.122.10.21:9999",
});

export default api;
