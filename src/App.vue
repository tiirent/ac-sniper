<template>
  <v-app>
    <toolbar />
    <v-main>
      <v-container style="max-width: 1264px;">
        <keep-alive>
          <router-view />
        </keep-alive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations } from "vuex";
import Toolbar from "./components/containers/Toolbar/Toolbar";
import Manager from "./store/store-manager.js";

export default {
  name: "App",

  components: {
    Toolbar,
  },

  data: () => ({
    //
  }),
  mounted() {
    this.pushItemsToFeed([{
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
        }]);  
    Manager.checkItem("uuid");
    console.log(this.$store.state.feed);
  },
  methods: {
    ...mapMutations(["pushItemsToFeed", "pushToFeed", "addTrackedItem"]),
  },
};
</script>
