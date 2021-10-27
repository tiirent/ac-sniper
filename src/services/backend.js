import HTTP from "./common.js";

export default {
    getItem() {
      return HTTP({
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
        }).then((response) => response.data);
    },
};