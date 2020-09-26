<template>
    <nav>
        <v-toolbar flat app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Team</span>
                <span class="font-weight-dark">Project</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="grey lighten-3">
                <span>Logout</span>
                <v-icon right>chevron_right</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer app absolute bottom temporary v-model="drawer" class="primary">
            <v-list>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon left class="white--text">dashboard</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">Home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>