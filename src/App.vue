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
    this.pushToFeed({ test: "test" });
    Manager.checkItem("uuid");
    console.log(this.$store.state.feed);
  },
  methods: {
    ...mapMutations(["pushItemsToFeed", "pushToFeed", "addTrackedItem"]),
  },
};
</script>
