<template>
    <v-app>
        <router-view></router-view>
        <main-navigation></main-navigation>
        <main-footer></main-footer>
    </v-app>
</template>

<script>
import MainNavigation from '@/components/Navbar';
import MainFooter from '@/components/Footer';

export default {
    name: 'youthEramus',
    components: {
        MainNavigation,
        MainFooter,
    }
};
</script>

<style>
</style>