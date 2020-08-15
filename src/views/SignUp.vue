<template>
  <v-form v-model="valid" class="mx-auto">
    <v-text-field v-model="name" label="Username" required></v-text-field>
    <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" label="Password" :rules="[rules.required, rules.min]"></v-text-field>
    <v-btn color="success" class="mr-4" @click="login">Sign Up</v-btn>
    <a href="/login" class="mr-4">Go back to login page</a>
  </v-form>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      valid: false,
      name: '',
      password: '',
      showPwd: false
    }
  },
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
