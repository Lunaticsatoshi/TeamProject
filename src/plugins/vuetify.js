import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md',
      },
      /* theme: {
        primary: '#9652ff',
        sucess: '#3cd1c2',
        info: '#ffaa2c',
        error: '#f83e70',
      } */
    theme: {
      dark: true,
      themes: {
        light: {
          primary: '#9652ff',
          sucess: '#3cd1c2',
          info: '#ffaa2c',
          secondary: colors.grey.darken1,
          accent: colors.shades.black, 
          error: colors.red.accent3,
          button: colors.red.darken3,
        },
        dark: {
          primary: '#9652ff',
          sucess: '#3cd1c2',
          info: '#ffaa2c',
          secondary: colors.blueGrey.lighten2,
          accent: colors.blueGrey.darken3,
          error: colors.red.accent3,
          button: colors.red.darken3,
        },
      },
  },
});
