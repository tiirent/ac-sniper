<template>
  <v-container class="pl-10">
    <v-row>
      <v-col>
        <v-menu tile>
          <template v-slot:activator="{ on }">
            <v-chip
              class="subtitle-2 px-4 mb-4"
              label
              outlined
              color="white lighten-2"
              text-color="grey white-70"
              v-on="on"
            >
              {{ currentItemSelection.text }}
              <v-icon right x-small>
                arrow_drop_down
              </v-icon>
            </v-chip>
          </template>
          <v-list dark>
            <v-list-item
              v-for="item in options"
              :key="item.key"
              @click="
                currentSelection = item.key;
              "
            >
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-spacer></v-spacer>
      <v-col lg="2" sm="3" class="pa-0">
        <v-switch
          v-model="liveSearchSwitch"
          flat
          dark
          :label="switchLabel"
          color="accent"
        ></v-switch>
      </v-col>
    </v-row>
    <v-card
      v-for="(item, index) in feedItems"
      :key="index"
      dark
      outlined
      class="text-overline py-4 pl-4 my-4 grey--text text--white-70"
      style="line-height: 1.2rem;"
      v-ripple="{ class: 'accent--text' }"
    >
      <v-row>
        <v-col
          cols="3"
          class="pt-4 text-no-wrap text-truncate"
        >
          <div>
            {{ item.name }}
          </div>
          <div>
            {{ item.price }}
          </div>
        </v-col>
        <v-col
          cols="8"
          class="pt-6 clickable text-no-wrap text-truncate"
          @click="onMessageClick(item.message)"
        >
          <span class="message-text">
            {{ item.message }}
          </span>
        </v-col>
        <v-col
          cols="1"
        >
          <v-btn
            icon
            color="accent"
            class="mt-1"
            @click="removeItem(item.listingId)"
          >
            <v-icon>delete</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-snackbar
      v-model="snackbar"
      :timeout="snackbarTimeout"
    >
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="accent"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
const ALL_ITEM_KEY = 'all';

export default {
  name: 'Feed',
  data() {
    return {
      currentSelection: ALL_ITEM_KEY,
      liveSearchSwitch: true,
      snackbar: false,
      snackbarTimeout: 1000,
      snackbarText: 'Copied trade message!',
    };
  },
  computed: {
    ...mapGetters([
      'feed',
      'trackedItems',
    ]),
    feedItems() {
      if (this.currentSelection === ALL_ITEM_KEY) {
        return this.feed;
      }
      return this.feed.filter(item => item.itemId === this.currentSelection);
    },
    switchLabel() {
      return `Live Search ${this.liveSearchSwitch ? 'On' : 'Off'}`;
    },
    options() {
      return [
        {
          key: 'all',
          text: 'All items',
        },
        ...this._.map(this.trackedItems, (item, itemId) => {
          return {
            key: itemId,
            text: item.name,
          }
        }),
      ]
    },
    currentItemSelection() {
      return this.options.find(item => item.key === this.currentSelection)
    }
  },
  methods: {
    ...mapMutations([
      'removeFromFeed'
    ]),
    onMessageClick(message) {
      navigator.clipboard.writeText(message);
      this.snackbar = true;
    },
    removeItem(listingId) {
      this.removeFromFeed(listingId)
    }
  },
};
</script>

<style scoped lang="sass">
.message-text:hover
  color: var(--v-accent-base)
</style>
