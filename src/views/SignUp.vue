<template>
  <v-main>
    <v-container fluid>
      <v-form v-model="valid" class="mx-auto">
        <v-text-field v-model="email" label="Username"></v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPwd ? 'text' : 'password'"
          label="Password"
          name="pwd"
          @click:append="showPwd = !showPwd"></v-text-field>
        <v-btn color="success" class="mr-4" @click="signup">Sign Up</v-btn>
        <a href="/login" class="mr-4">Go back to login page</a>
      </v-form>
    </v-container>
    <v-container fluid v-if="errorExists">
      <v-alert
        dense
        type="error"
      >
      {{error}}
      </v-alert>
    </v-container>
  </v-main>
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
      showPwd: false,
      // error handling
      errors: '',
      errorExists: false
    }
  },
  methods: {
    signup () {
      event.preventDefault()
      this.errorExists = false
      axios.post('http://localhost:3000/auth/create', { email: this.email, password: this.password }).then(response => {

      }).catch(error => {
        this.errorExists = true
        this.error = error.response.data.message.join('. ')
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
