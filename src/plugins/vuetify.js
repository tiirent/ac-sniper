import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

const opts = {
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#0D1117",
        accent: "#C9D1D9",
        secondary: "#161b22",
        info: "#03A9F4",
        warning: "#FFB300",
        error: "#F44336",
        success: "#00C853",
        background: "#ECEFF1",
      },
      dark: {
        primary: "#0D1117",
        accent: "#C9D1D9",
        secondary: "#161b22",
        info: "#03A9F4",
        warning: "#FFB300",
        error: "#F44336",
        success: "#00C853",
        background: "#ECEFF1",
      },
    },
  },
  icons: {
    iconfont: "mdi", // default - only for display purposes
  },
};

export default new Vuetify(opts);
