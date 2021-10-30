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
              {{ currentSelection.text }}
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
                currentSelection = item;
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
const ALL_ITEM_KEY = 'all';

export default {
  name: 'Feed',
  data() {
    // TODO: replace with real list
    const options = [
      {
        text: 'All items',
        key: 'all',
      },
      {
        text: 'Kaom\'s Heart',
        key: 'f7sjlw8dllwe',
      },
      {
        text: 'Replica Atziri\'s Foible',
        key: 'f7sjlw8sddfslwe',
      },
    ];
    return {
      currentSelection: options[0],
      options,
      items: [
        {
          name: 'Kaom\'s Heart',
          itemId: 'f7sjlw8dllwe',
          listingId: 'e2efdd9f0we2',
          price: '5 chaos orb',
          message: '@XhaosHunter Hi, I would like to buy your Kaom\'s Heart Glorious Plate listed for 5 chaos in Scourge (stash tab "4"; position: left 11, top 8)',
        },
        {
          name: 'Kaom\'s Heart',
          itemId: 'f7sjlw8dllwe',
          listingId: 'ghssd9f0we2',
          price: '5 chaos orb',
          message: '@photoism 안녕하세요, 스컬지(보관함 탭 "~price 5 chaos", 위치: 왼쪽 3, 상단 9)에 5 chaos(으)로 올려놓은 카옴의 심장(Kaom\'s Heart) 영광의 판금 갑옷(을)를 구매하고 싶습니다',
        },
        {
          name: 'Replica Atziri\'s Foible',
          itemId: 'f7sjlw8sddfslwe',
          listingId: 'lfdirw9f0we2',
          price: '20 chaos orb',
          message: '@dongho Hi, I would like to buy your Replica Atziri\'s Foible Paua Amulet listed for 20 chaos in Scourge (stash tab "hang ton kho"; position: left 10, top 4)',
        },
      ],
      liveSearchSwitch: true,
      snackbar: false,
      snackbarTimeout: 1000,
      snackbarText: 'Copied trade message!',
    };
  },
  computed: {
    feedItems() {
      if (this.currentSelection.key === ALL_ITEM_KEY) {
        return this.items;
      }
      return this.items.filter(item => item.itemId === this.currentSelection.key);
    },
    switchLabel() {
      return `Live Search ${this.liveSearchSwitch ? 'On' : 'Off'}`;
    },
  },
  methods: {
    onMessageClick(message) {
      navigator.clipboard.writeText(message);
      this.snackbar = true;
    },
    removeItem(id) {
      this.items = this._.filter(this.items, item => item.listingId !== id);
    }
  },
};
</script>

<style scoped lang="sass">
.message-text:hover
  color: var(--v-accent-base)
</style>
