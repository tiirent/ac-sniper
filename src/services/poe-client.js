import HTTP from "./axios-config.js";
import { parse } from "node-html-parser";

export default {
  async getItemResultList(query) {
    const response = await HTTP({
      method: "post",
      url: "api/trade/search/Scourge",
      data: {
        query: query,
      },
      headers: {
        "user-agent": "PostmanRuntime/7.28.4",
      },
    });
    return response.data;
  },

  async getItemResult(queryId, items) {
    const response = await HTTP({
      method: "get",
      url: `api/trade/fetch/${items.slice(0, 9).join(",")}?query=${queryId}`,
      headers: {
        "user-agent": "PostmanRuntime/7.28.4",
      },
    });
    return response.data;
  },

  async getPoeWebpage(id) {
    const response = await HTTP({
      method: "get",
      url: "trade/search/Scourge/" + id,
      headers: {
        "user-agent": "PostmanRuntime/7.28.4",
      },
    });
    return response.data;
  },

  async getQueryFromPoePage(page) {
    const dom = parse(page);
    let script = dom
      .querySelector("body")
      .querySelector("script[type='text/javascript']:last-child").textContent;

    const START_FLAG = "t(";
    const END_FLAG = '"loggedIn":false}';

    let resultObj = JSON.parse(
      script.substring(
        script.indexOf(START_FLAG) + START_FLAG.length,
        script.indexOf(END_FLAG) + END_FLAG.length
      )
    );

    return resultObj.state;
  },
};
