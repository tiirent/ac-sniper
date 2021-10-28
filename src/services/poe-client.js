import HTTP from "./axios-config.js";

const jsdom = require("jsdom");

export default {
  async getItemResultList(query) {
    const response = await HTTP({
      method: "post",
      url: "api/trade/search/Scourge",
      data: {
        query: query,
        sort: {
          price: "asc",
        },
      },
      headers: {
        "user-agent": "PostmanRuntime/7.28.4",
      },
    });
    return response.data.result;
  },

  async getItemResult(resultList) {
    const response = await HTTP({
      method: "get",
      url: "api/trade/fetch/" + resultList.join(","),
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

  async getQueryFromPoePage(id) {
    const dom = new jsdom.JSDOM(await this.getPoeWebpage(id));
    let script = dom.window.document
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
