import axios from "axios";

const fetchInstance = axios.create({
  baseURL: "http://10.227.14.200:4444",
  timeout: 2000,
});

export default fetchInstance;
