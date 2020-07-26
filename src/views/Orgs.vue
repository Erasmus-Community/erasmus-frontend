<template>
    <v-main class="ma-3">
        <h1 class="text-xs-center"> Organizations </h1>
        <v-container>
          <div v-for="org in orgs" v-bind:key="org.id">
            <v-row>
              <v-col name="country" class="col-3">{{org.country}}</v-col>
              <v-col name="org_name" class="col-6">{{org.name}}</v-col>
              <v-col name="href" class="col-3">
                <a :href="'/orgs/' + org.id">See More</a>
              </v-col>
            </v-row>
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
      orgs: [],
      error: false
    }
  },

  created: function () {
    this.fetchOrgs()
  },

  methods: {
    fetchOrgs () {
      axios.get('http://localhost:3000/api/organisations').then(response => {
        this.orgs = response.data
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
