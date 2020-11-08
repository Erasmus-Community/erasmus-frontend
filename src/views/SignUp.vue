<template>
  <v-container>
    <v-form v-model="valid" class="mx-auto">
      <v-text-field v-model="email" label="Username"></v-text-field>
      <v-text-field
        v-model="password"
        :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPwd ? 'text' : 'password'"
        label="Password"
        name="pwd"
        @click:append="showPwd = !showPwd"></v-text-field>
      <v-btn color="success" class="mr-4" @click="login">Sign Up</v-btn>
      <a href="/login" class="mr-4">Go back to login page</a>
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'signup',
  data () {
    return {
      valid: false,
      email: '',
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
      axios.post('http://localhost:3000/auth/create', { email: this.email, password: this.password }).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
