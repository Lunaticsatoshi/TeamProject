<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-regular">Team</span>
        <span class="font-weight-black">Project</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items> </v-toolbar-items>
      <v-btn rounded color="button">
        <span>Logout</span>
        <v-icon right>chevron_right</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer absolute temporary v-model="drawer" class="primary">
      <v-list nav dense v-model="items">
        <v-list-item :key="item.text" v-for="item in items" :to="item.route">
          <v-list-item-icon>
            <v-icon left class="white--text" v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="white--text"
              v-text="item.text"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      items: [
        { icon: "dashboard", text: "Home", route: "/" },
        { icon: "folder", text: "Projects", route: "/projects" },
        { icon: "group", text: "Teams", route: "/teams" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>