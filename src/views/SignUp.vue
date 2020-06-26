<template>
    <v-content>
        <form>
            <input type="text" name="username" placeholder="Username" required/>
            <input type="password" name="password" placeholder="*********" required/>
            <button v-on:click="signup">Sign Up</button>
        </form>
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
      event.preventDefault()
      console.log('signup')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
