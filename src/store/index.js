import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const initState = () => {
  return {
    feed: [],
    trackedItems: {},
  };
};

const store = new Vuex.Store({
  plugins: [createPersistedState({ storage: window.sessionStorage })],
  state: initState(),
  getters: {
    feed: (state) => state.feed,
    trackedItems: (state) => state.trackedItems,
  },
  mutations: {
    pushToFeed(state, item) {
      state.feed.unshift(item);
      state.feed = _.clone(state.feed)
    },
    pushItemsToFeed(state, items) {
      state.feed.unshift(...items);
      state.feed = _.clone(state.feed)
    },
    addTrackedItem(state, item) {
      state.trackedItems[uuidv4()] = {
        url: item.url,
        name: item.name,
        query: null,
        itemList: null,
      };

      state.trackedItems = _.clone(state.trackedItems)
    },
    editTrackedItem(state, item) {
      state.trackedItems[item.id] = {
        url: item.url,
        name: item.name,
        query: null,
        itemList: null,
      };

      state.trackedItems = _.clone(state.trackedItems)
    },
    removeTrackedItem(state, id) {
      delete state.trackedItems[id];

      state.trackedItems = _.clone(state.trackedItems)
    },
    removeFromFeed(state, listingId) {
      _.remove(state.feed, item => item.listingId == listingId)

      state.feed = _.clone(state.feed)
    }
  },
});

export default store;
