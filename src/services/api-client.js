import { API } from "./axios-config.js";

export default {
  async getQuery(id) {
    const response = await API({
      method: "get",
      url: "api/query/" + id,
      data: {},
      headers: {},
    });
    return response.data;
  },

  async getItem(query) {
    console.log(`getting item... query: ${JSON.stringify(query)}`);
    const response = await API({
      method: "post",
      url: "api/item",
      data: query,
      headers: {},
    });
    return response.data;
  },

  async getResult(queryId, itemList) {
    console.log(`getting results... item: ${itemList.join(",")}`);
    const response = await API({
      method: "post",
      url: "api/result/" + queryId,
      data: itemList,
      headers: {},
    });
    return response.data;
  },
};
