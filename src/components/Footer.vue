<template>
  <v-footer fixed class="pa-3">
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
export default {
  name: 'MainFooter',
  data () {
    return { }
  }
}
</script>

<style lang="scss" scoped>

</style>
