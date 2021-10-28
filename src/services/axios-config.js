import axios from "axios";

const HTTP = axios.create({
  baseURL: "https://www.pathofexile.com",
});

export { HTTP as default };
