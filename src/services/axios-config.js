import axios from "axios";

const HTTP = axios.create({
  baseURL: "https://www.pathofexile.com/api",
});

export { HTTP as default };