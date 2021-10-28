import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const initState = () => {
  return {
    feed: [],
    trackedItems: []
  };
};

const store = new Vuex.Store({
  state: initState(),
  mutations: {
    pushToFeed(state, item) {
      state.feed.unshift(item);
    },
    pushItemsToFeed(state, items) {
      state.feed.unshift(...items);
    },
    addTrackedItemUrl(state, url) {
      state.trackedItems.append({
        url,
        filters: undefined,
        itemList: undefined,
      });
    },
  },
});

export default store;
