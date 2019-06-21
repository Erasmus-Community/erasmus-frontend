<template>
    <v-app>
        <router-view></router-view>
        <main-navigation></main-navigation>
    </v-app>
</template>

<script>
import MainNavigation from '@/components/Navbar';
export default {
    name: 'youthEramus',
    components: {
        MainNavigation
    }
};
</script>

<style>
</style>