import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#3EC28F",
        headerText: "#FFFFFF"
      },
      dark: {
        primary: "black",
        anchor: "#FFFFFF"
      }
    }
  }
});
