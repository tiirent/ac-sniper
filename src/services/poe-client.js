import HTTP from "./axios-config.js";

export default {
  async getItem() {
    const response = await HTTP({
      method: "post",
      url: "trade/search/Scourge",
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
};