<template>
    <span>
        <v-navigation-drawer app v-model="drawer">
            <v-list>
                <template v-for="(menu, i) in menus">
                    <v-list-tile :key="i">
                        <v-list-tile-content>
                            {{menu.value}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${i}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app>
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link :to="{path: '/'}">
                <v-btn flat class="hidden-sm-and-down">Home</v-btn>
            </router-link>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <router-link :to="{path: '/orgs'}">
                <v-btn flat class="hidden-sm-and-down">Organisations</v-btn>
            </router-link>
            <router-link :to="{path: '/projects'}">
                <v-btn flat class="hidden-sm-and-down">Projects</v-btn>
            </router-link>
            <router-link :to="{path: '/'}">
                <v-btn flat class="hidden-sm-and-down">The Team</v-btn>
            </router-link>
            <router-link :to="{path: '/login'}">
                <v-btn flat class="hidden-sm-and-down">Login</v-btn>
            </router-link>
            <router-link :to="{path: '/signup'}">
                <v-btn flat class="hidden-sm-and-down">Sign Up</v-btn>
            </router-link>
        </v-toolbar>
    </span>
</template>

<script>
    export default {
        name: 'MainNavigation',
        data() {
            return {
                drawer: false,
                menus: [
                    { value: 'Home' },
                    { value: 'Organisations' },
                    { value: 'Projects' },
                    { value: 'The Team' },
                    { value: 'Login'},
                    { value: 'Sign Up'}
                ]
            };
        }
    }
</script>

<style lang="scss" scoped>

</style>