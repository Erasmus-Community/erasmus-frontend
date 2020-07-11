<template>
  <v-form v-model="valid" class="mx-auto">
    <v-text-field v-model="name" label="Username" required></v-text-field>
    <v-btn color="success" class="mr-4" @click="recover">Recover Password</v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {}
  },
  methods: {
    recover () {
      console.log('recover')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>z
