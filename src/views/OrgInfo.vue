<template>
    <v-main>
        <div class="container">
            <v-btn class="info" :href="'/orgs'">Back to the List</v-btn>
            <div class="container">{{ organisation.description }} </div>
            <div class="contaier">{{organisation.name}} </div>
        </div>
    </v-main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'organisation-info',
  props: ['orgId'],
  data: function () {
    return {
      organisation: null
    }
  },

  created: function () {
    debugger
    this.fetchSingleOrg()
  },

  methods: {
    fetchSingleOrg () {
      axios.get('http://localhost:3000/api/organisations/' + this.orgId).then(response => {
        this.organisation = response.data
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
