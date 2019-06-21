<template>
    <v-app>
        <router-view></router-view>
        <main-navigation></main-navigation>
    </v-app>
</template>

<script>
import MainNavigation from '@/components/Navbar';
export default {
    name: 'LogRocketApp',
    components: {
        MainNavigation
    }
};
</script>

<style>
</style>