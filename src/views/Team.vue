<template>
  <v-content class="ma-3">
    <h1 class="text-xs-center"> The Team </h1>
    <v-container fluid grid-list-sm>
      <v-layout>
        <v-flex v-for="i in 6" :key="i" xs4>
          <img :src="`https://randomuser.me/api/portraits/men/${i + 20}.jpg`" class="image" alt="lorem" width="100%" height="100%">
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
