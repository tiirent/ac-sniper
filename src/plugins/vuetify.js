import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

const opts = {
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#0D1117',
        accent: '#8362E5',
        secondary: '#161b22',
        info: '#03A9F4',
        warning: '#FFB300',
        error: '#F44336',
        success: '#00C853',
        background: '#ECEFF1',
      },
      dark: {
        primary: '#0D1117',
        accent: '#8362E5',
        secondary: '#161b22',
        info: '#03A9F4',
        warning: '#FFB300',
        error: '#F44336',
        success: '#00C853',
        background: '#ECEFF1',
      },
    },
  },
};

export default new Vuetify(opts);
