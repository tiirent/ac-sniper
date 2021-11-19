<template>
  <v-app-bar
    v-resize="onResize"
    color="secondary"
    extension-height="48px"
    app
    flat
  >
    <v-row class="pl-2" no-gutters>
      <v-col offset="2">
        <span
          class="text-overline accent--text"
          style="font-size: .9rem !important;"
        >
          AC-Sniper
        </span>
      </v-col>
    </v-row>
    <v-row slot="extension" no-gutters>
      <v-col offset="2">
        <v-tabs
          v-model="activeTab"
          background-color="transparent"
          color="grey white-70"
          dark
        >
          <v-tab key="feed" to="feed" class="ml-1 px-1"> Feed </v-tab>
          <v-tab key="items" to="items" class="px-3">
            Items
          </v-tab>
          <v-tabs-items v-model="activeTab" @change="updateRouter($event)" />
        </v-tabs>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "Toolbar",
  components: {},
  mixins: [],
  data() {
    return {
      activeTab: "feed",
    };
  },
  computed: {},
  methods: {
    onResize() {
      this.windowHeight = window.innerHeight;
    },
    updateRouter(viewName) {
      this.$router.push(viewName);
    },
  },
};
</script>
