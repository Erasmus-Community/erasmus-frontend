<template>
  <v-form v-model="valid" class="mx-auto">
    <v-text-field v-model="name" label="Username" required></v-text-field>
    <v-password-field v-model="password" label="Password" required></v-password-field>
    <v-checkbox v-model="remember" label="Remember me?"></v-checkbox>
    <v-btn color="success" class="mr-4" @click="login">Login</v-btn>
    <v-btn color="info" class="mr-4" @click="signup">Create New Account</v-btn>
    <a href="/recover" class="mr-4">Forgot password?</a>
  </v-form>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      toggle: false
    }
  },
  methods: {
    login () {
      console.log('login')
    },
    signup () {
      this.$router.push('/signup')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
