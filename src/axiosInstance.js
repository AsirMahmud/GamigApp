import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a7d90ad7127b44bbb0a70176dd8cec23",
  },
});

export default instance;
