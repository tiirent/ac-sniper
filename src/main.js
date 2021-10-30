import Vue from 'vue'
import vuetify from './plugins/vuetify'
import lodash from 'lodash';

import App from './App.vue'

import store from './store'
import router from './router';

Vue.config.productionTip = false
Vue.prototype._ = lodash;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
