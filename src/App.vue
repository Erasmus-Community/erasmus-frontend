<template>
    <v-app>
      <v-app-bar app>
      </v-app-bar>
      <v-container id="main-content">
        <router-view/>
      </v-container>
    </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  })
}
</script>

<style lang="scss" scoped>
  #main-content {
    margin-top: 65px;
  }
</style>
