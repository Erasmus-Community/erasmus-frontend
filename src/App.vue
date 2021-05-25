<template>
    <v-app>
      <v-app-bar app>
        <v-btn  v-if="!isLogged" icon @click="login">
          Login
        </v-btn>
        <v-btn v-if="isLogged" icon>
          Logout
        </v-btn>
      </v-app-bar>
      <v-container id="main-content">
        <router-view/>
      </v-container>
    </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
  }),
  methods: {
    home () {
      if (this.$route.name !== '') {
        this.$router.push('/').catch(() => {})
      }
    },

    login () {
      if (this.$route.name !== 'login') {
        this.$router.push('/login').catch(() => {})
      }
    },

    orgs () {
      if (this.$route.name !== 'orgs') {
        this.$router.push('/organisations').catch(() => {})
      }
    },

    isLogged () {
      let loggedIn = localStorage.getItem('login_token')
      return loggedIn !== undefined && loggedIn !== null && loggedIn !== ''
    }
  }
}
</script>

<style lang="scss" scoped>
  #main-content {
    margin-top: 65px;
  }
</style>
