<template>
  <v-app>
    <toolbar />
    <v-main>
      <v-content>
        <v-container style="max-width: 1264px">
          <keep-alive :include="keepAliveComponents">
            <router-view />
          </keep-alive>
        </v-container>
      </v-content>
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
    this.addTrackedItem("zJRO6DgI4", "test item name");
    Manager.checkItem("uuid");
    console.log(this.$store.state.feed);
  },
  methods: {
    ...mapMutations(["pushItemsToFeed", "pushToFeed", "addTrackedItem"]),
  },
};
</script>
