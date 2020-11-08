<template class="ma-3">
    <v-main class="ma-3">
        <h1 class="text-center">Organizations</h1>
        <!-- This is a search bar. TODO:
        <v-container>
          <v-row>
            <v-col class="d-flex col-6">
             <country-select class="v-btn" v-model="country" :country="country" topCountry="PT" />
            </v-col>
            <v-col class="d-flex col-3">
              <v-btn :click="search">Search</v-btn>
            </v-col>
          </v-row>
        </v-container>
        -->
        <v-container>
          <v-row v-for="org in orgs" v-bind:key="org.id">
              <v-col name="country" class="col-3">{{org.country}}</v-col>
              <v-col name="org_name" class="col-6">{{org.name}}</v-col>
              <v-col name="org_email" class="col-3">{{org.email}}</v-col>
            <!--  <v-col name="href" class="col-3"> # this is to do after I have more time to do like a overview of the orgs
                <a :href="'/orgInfo/' + org.id">See More</a>
              </v-col> -->
          </v-row>
          <div >
          </div>
        </v-container>
    </v-main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'orgs',
  components: {

  },
  data: function () {
    return {
      country: '',
      orgs: [],
      error: false
    }
  },

  created: function () {
    this.fetchOrgs()
  },

  methods: {
    fetchOrgs (options = null) {
      let url = 'http://localhost:8000/api/organisations'

      if (options) {
        debugger
      }

      axios.get(url).then(response => {
        this.orgs = response.data
      }).catch(error => {
        console.log(error)
      })
    },

    search () {
      this.fetchOrgs(this.country)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
