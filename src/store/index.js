import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

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
    trackedItemsHash: (state) => JSON.stringify(state.trackedItems),
  },
  mutations: {
    pushToFeed(state, item) {
      state.feed.unshift(item);
    },
    pushItemsToFeed(state, items) {
      state.feed.unshift(...items);
    },
    addTrackedItem(state, item) {
      state.trackedItems[uuidv4()] = {
        url: item.url,
        name: item.name,
        query: undefined,
        itemList: undefined,
      };
      state.trackedItems = _.clone(state.trackedItems);
    },
    editTrackedItem(state, item) {
      state.trackedItems[item.id] = {
        url: item.url,
        name: item.name,
        query: undefined,
        itemList: undefined,
      };
      state.trackedItems = _.clone(state.trackedItems);
    },
    removeTrackedItem(state, id) {
      delete state.trackedItems[id];
      state.trackedItems = _.clone(state.trackedItems);
    },
  },
});

export default store;
