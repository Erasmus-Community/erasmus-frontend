<template>
    <v-content>
        <form>
            <input type="text" name="username" placeholder="Username"/>
            <input type="password" name="password" placeholder="*********"/>
        </form>
        <button v-on:click="signup">Sign Up</button>
        <p>Go back to <a href="/login">login </a>page</p>
    </v-content>
</template>

<script>
export default {
  name: 'signup',
  methods: {
    login () {
      this.$router.push('/login')
    },
    signup () {
      console.log('signup')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
