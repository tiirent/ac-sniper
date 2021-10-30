import store from ".";
import ApiClient from "../services/api-client.js";

export default {
  // poller test
  poll() {
    console.log("polledd...");
    console.log(JSON.stringify(store.getters.feed));
    // setTimeout(() => this.poll(), 1000)
    return;
  },

  // checkItem() queries item and updates itemList, returning list of resultIds
  checkItem(itemId) {
    let item = store.getters.trackedItems[itemId];
    if (item.query === undefined) {
      //get query
      console.log("getting query");
      // todo: it's called url but it's not the url, it's just the zxvmnk at the end for now
      ApiClient.getQuery(item.url)
        .then((query) => ApiClient.getItem(query))
        .then((data) => ApiClient.getResult(data.id, data.result))
        .then((result) => console.log(`got item! \n ${JSON.stringify(result)}`))
        .catch((err) => console.log(`o no an error ${err}`));
      console.log("query fetched");
    } else {
      //make query to poe and get result
      ApiClient.getItem(item.query)
        .then((result) => console.log(`got item1! \n ${result}`))
        .catch((err) => `o no an error ${err}`);
    }

    //compare result to previous result

    //save result
    console.log(`result item ${JSON.stringify(item)}`);
    return;
  },

  // updateFeed()
};
