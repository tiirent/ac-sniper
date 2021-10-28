// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

const options = {
  theme: {
    themes: {
      light: {
        primary: "#212121",
        accent: "#8362E5",
        secondary: "#607D8B",
        info: "#03A9F4",
        warning: "#FFB300",
        error: "#F44336",
        success: "#00C853",
        background: "#ECEFF1",
      },
      dark: {
        primary: "#212121",
        accent: "#8362E5",
        secondary: "#607D8B",
        info: "#03A9F4",
        warning: "#FFB300",
        error: "#F44336",
        success: "#00C853",
        background: "#ECEFF1",
      },
    },
  },
};

export default createVuetify(options);
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
