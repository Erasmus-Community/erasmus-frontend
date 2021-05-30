<template>
    <div>cenas</div>
</template>

<script>
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'

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
      const loggedIn = localStorage.getItem('login_token')
      return loggedIn !== undefined && loggedIn !== null && loggedIn !== ''
    }
  },
  computed: {
    tokenDecoder () {
      const token = localStorage.getItem('login_token')
      if (token === undefined || token === null || token === '') {
        return ''
      } else {
        debugger
        const decoded = jwt_decode(token)
        console.log(decoded)
        return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  #main-content {
    margin-top: 65px;
    height: calc(100vh - 65px);
  }
</style>
