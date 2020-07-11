<template>
    <v-app>
       <!-- <main-navigation></main-navigation> -->
        <router-view></router-view>
        <main-footer></main-footer>
    </v-app>
</template>

<script>
// import MainNavigation from '@/components/Navbar'
import MainFooter from '@/components/Footer'

export default {
  name: 'youthEramus',
  components: {
    // MainNavigation,
    MainFooter
  }
}
</script>

<style>
</style>
