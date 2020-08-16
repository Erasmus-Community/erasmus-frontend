<template>
  <v-form v-model="valid" class="mx-auto">
    <v-text-field v-model="name" label="Username" required></v-text-field>
    <v-text-field
      v-model="password"
      :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'"
      :type="showPwd ? 'text' : 'password'"
      label="Password"
      :rules="[rules.required, rules.min]"
      name="pwd"
      @click:append="showPwd = !showPwd"></v-text-field>
    <v-btn color="success" class="mr-4" @click="login">Sign Up</v-btn>
    <a href="/login" class="mr-4">Go back to login page</a>
  </v-form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'signup',
  data () {
    return {
      valid: false,
      name: '',
      password: '',
      showPwd: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match')
      }
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },

    signup () {
      event.preventDefault()
      axios.post('http://localhost:3000/auth/create', { email: '', password: '' }).then(response => {
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
