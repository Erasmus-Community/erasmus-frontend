<template>
  <v-main>
    <v-container fluid>
      <v-form v-model="valid" class="mx-auto mb-2" >
        <v-text-field type="text" v-model="email" label="Username"></v-text-field>
        <v-text-field
        v-model="password"
        :append-icon="showPwd ? 'mdi-eye-off' : 'mdi-eye'"
        :type="showPwd ? 'text' : 'password'"
        label="Password"
        name="pwd"
        @click:append="showPwd = !showPwd"></v-text-field>
        <v-checkbox v-model="remember" label="Remember me?"></v-checkbox>
        <v-btn color="success" class="mr-4" @click="login">Login</v-btn>
        <v-btn color="info" class="mr-4" @click="signup">Create New Account</v-btn>
        <a href="/recover" class="mr-4">Forgot password?</a>
      </v-form>
    </v-container>
    <v-container fluid v-if="errorExists">
      <v-alert
        dense
        type="error"
      >
      <p v-for="error of errors" :key="error">{{error}}</p>
      </v-alert>
    </v-container>
  </v-main>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      toggle: false,
      valid: false,
      remember: false,
      email: '',
      password: '',
      showPwd: false,

      // error logic
      errors: '',
      errorExists: false
    }
  },
  methods: {
    login () {
      event.preventDefault()
      this.errorExists = false
      axios.post('http://localhost:3000/auth/login', { email: this.email, password: this.password }).then(response => {
        debugger
        const info = response.data
        if (info.status === 401) {
          this.errorExists = true
          this.errors = info.response.error
        } else {
          // save token
          const accessToken = info.access_token
          localStorage.setItem('login_token', accessToken)
          this.$router.push('/')
        }
      }).catch(error => {
        this.errorExists = true
        this.errors = error.response.data.message
      })
    },
    signup () {
      this.$router.push('/signup')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
