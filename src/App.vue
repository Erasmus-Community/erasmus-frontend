<template>
    <v-app>
      <v-app-bar app>
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> TODO: asking the value on the -->
        <v-btn icon>
          <v-icon @click="home">mdi-home</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
        <v-icon @click="orgs">mdi-charity</v-icon>
        </v-btn>
        <v-btn icon @click="login">
          <v-icon>mdi-login</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-logout</v-icon>
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
    }
  }
}
</script>

<style lang="scss" scoped>
  #main-content {
    margin-top: 65px;
  }
</style>
