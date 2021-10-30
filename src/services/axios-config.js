import axios from "axios";

const HTTP = axios.create({
  baseURL: "https://www.pathofexile.com",
});

const API = axios.create({
  baseURL: "https://ac-sniper-tiirent.vercel.app",
});

export { HTTP as default, API };
