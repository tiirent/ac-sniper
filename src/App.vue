<template>
  <v-app>
    <toolbar />
    <v-main>
      <v-content>
        <v-container style="max-width: 1264px;">
          <keep-alive :include="keepAliveComponents">
            <router-view />
          </keep-alive>
        </v-container>
      </v-content>
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex';
import Toolbar from './components/containers/Toolbar/Toolbar';

export default {
  name: 'App',

  components: {
    Toolbar,
  },

  data: () => ({
    //
  }),
  mounted() {
    this.pushToFeed({test: 'test'});
    console.log(this.$store.state.feed);
  },
  methods: {
    ...mapMutations([
      'pushItemsToFeed',
      'pushToFeed',
    ]),
  }
};
</script>
