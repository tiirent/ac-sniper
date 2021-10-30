import Vue from "vue";
import Vuex from "vuex";
// import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex);

const initState = () => {
  return {
    feed: [],
    trackedItems: {},
  };
};

const store = new Vuex.Store({
  state: initState(),
  getters: {
    feed: (state) => state.feed,
    trackedItems: (state) => state.trackedItems,
  },
  mutations: {
    pushToFeed(state, item) {
      state.feed.unshift(item);
    },
    pushItemsToFeed(state, items) {
      state.feed.unshift(...items);
    },
    addTrackedItem(state, url, name) {
      //todo: put in uuidv4()
      state.trackedItems["uuid"] = {
        url,
        name,
        query: undefined,
        itemList: undefined,
      };
    },
  },
});

export default store;
