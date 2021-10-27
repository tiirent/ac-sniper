import HTTP from "./axios-config.js";

const jsdom = require("jsdom");

export default {
  async getItem() {
    const response = await HTTP({
      method: "post",
      url: "api/trade/search/Scourge",
      data: {
        query: {
          status: {
            option: "online"
          },
          name: "The Pariah",
          type: "Unset Ring",
          stats: [{
            type: "and",
            filters: []
          }]
        },
        sort: {
          price: "asc"
        }
      },
      headers: {
        'user-agent': 'PostmanRuntime/7.28.4'
      },
    });
    return response.data;
  },

  async getPoeWebpage(id) {
    const response = await HTTP({
      method: "get",
      url: "trade/search/Scourge/" + id,
      headers: {
        'user-agent': 'PostmanRuntime/7.28.4'
      },
    });
    return response.data;
  },

  async getQueryFromPoeTrade(id) {
    const dom = new jsdom.JSDOM(await this.getPoeWebpage(id));
    let script = dom.window.document.querySelector("body").querySelector("script[type='text/javascript']:last-child").textContent

    const START_FLAG = 't('
    const END_FLAG = '"loggedIn":false}'

    let resultObj = JSON.parse(
      script.substring(
        script.indexOf(START_FLAG) + START_FLAG.length,
        script.indexOf(END_FLAG) + END_FLAG.length)
      )

    return resultObj.state
  }
};