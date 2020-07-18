<template>
  <v-form v-model="valid" class="mx-auto">
    <v-text-field v-model="name" label="Username" required></v-text-field>
    <v-password-field v-model="password" label="Password" required></v-password-field>
    <v-btn color="success" class="mr-4" @click="login">Sign Up</v-btn>
    <a href="/login" class="mr-4">Go back to login page</a>
  </v-form>
</template>

<script>
export default {
  name: 'signup',
  methods: {
    login () {
      this.$router.push('/login')
    },
    signup () {
      event.preventDefault()
      console.log('signup')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
