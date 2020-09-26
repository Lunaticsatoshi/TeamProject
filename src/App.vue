<template>
  <v-app class="grey lighten-4">
    <Navbar />

    <v-main>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';


export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>
