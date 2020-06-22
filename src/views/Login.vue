<template>
    <v-content>
        <form>
            <input type="text" name="username" placeholder="Username"/>
            <input type="password" name="password" placeholder="*********"/>
            <input type="checkbox" v-model.lazy="toggle">
            <label for="checkbox">Remember me?</label>
        </form>
        <p>Forgot password?</p>
        <button v-on:click="login">Login</button>
        <button v-on:click="signup">Create New Account</button>
    </v-content>
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
