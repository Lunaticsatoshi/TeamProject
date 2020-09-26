import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md',
      },
      theme: {
        primary: '#9652ff',
        sucess: '#3cd1c2',
        info: '#ffaa2c',
        error: '#f83e70',
        drawer: '#061015'
      }
});
