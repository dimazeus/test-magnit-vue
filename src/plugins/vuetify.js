import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: false,
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary:{
          base: "#3EC28F",
          lighten1: "#F2F2F2"
        },
        mainBackground: "#FFFFFF",
        headerText: "#FFFFFF",
        error: "#CF2F2F"
      },
      dark: {
        primary: "black",
        anchor: "#FFFFFF"
      }
    }
  }
});
