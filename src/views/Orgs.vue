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
      orgs: [
        {
          'id': '5ee3b3e9144d50ad015f6117',
          'index': 0,
          'guid': 'f965f9bc-5bcf-4770-881d-cfa6f4dbbfcc',
          'country': 'Croatia (Hrvatska)',
          'name': 'Org Name',
          'email': 'example@mail.org',
          'description': 'Eiusmod ad aliqua cillum excepteur.'
        },
        {
          'id': '5ee3b3e90401c39caaa0fb44',
          'index': 1,
          'guid': 'ae5cc525-7a3e-45af-8acd-ca4bb1c1c65f',
          'country': 'Cyprus',
          'name': 'Org Name',
          'email': 'example@mail.org',
          'description': 'Amet minim do cillum proident nostrud pariatur esse commodo et amet.'
        },
        {
          'id': '5ee3b3e9717de28fa468465e',
          'index': 2,
          'guid': '5755a4b3-6b95-4b57-927e-81c13be3d2fd',
          'country': 'Fiji',
          'name': 'Org Name',
          'email': 'example@mail.org',
          'description': 'Duis ea quis dolore culpa officia fugiat ut deserunt ut culpa Lorem.'
        },
        {
          'id': '5ee3b3e9eb969c7ba244104a',
          'index': 3,
          'guid': '681d9bd9-a3bd-4954-a055-156403916dc5',
          'country': 'Trinidad and Tobago',
          'name': 'Org Name',
          'email': 'example@mail.org',
          'description': 'Incididunt aliqua minim consequat ea sunt sit.'
        },
        {
          'id': '5ee3b3e96efec48b20e19d8d',
          'index': 4,
          'guid': '318858c1-e810-4439-be61-bd40b7ac1c24',
          'country': 'Chad',
          'name': 'Org Name',
          'email': 'example@mail.org',
          'description': 'Ut laborum officia commodo nulla consequat mollit enim dolore nisi consequat ipsum reprehenderit occaecat.'
        },
        {
          'id': '5ee3b3e97724cda65c41b604',
          'index': 5,
          'guid': '102360ab-e5d3-42d6-a353-4f7dabda5c8a',
          'country': 'Comoros',
          'name': 'Org Name',
          'email': 'example@mail.org',
          'description': 'Aliqua proident exercitation dolore ad magna non sint.'
        },
        {
          'id': '5ee3b3e9741cc95666c3302e',
          'index': 6,
          'guid': '87b042d3-df80-4617-9171-73e1eb7d6621',
          'country': 'Viet Nam',
          'name': 'Org Name',
          'email': 'example@mail.org',
          'description': 'Qui aliqua do incididunt exercitation cillum ea excepteur ad ad in dolore do.'
        },
        {
          'id': '5ee3b3e9ad0e2d6d61653a64',
          'index': 7,
          'guid': 'c39ce4d5-6945-470e-aace-170cd553d2aa',
          'country': 'Belgium',
          'name': 'Org Name',
          'email': 'example@mail.org',
          'description': 'Enim ad officia ut cillum nostrud nisi irure reprehenderit in nulla nostrud.'
        },
        {
          'id': '5ee3b3e92e878c81c36ea1da',
          'index': 8,
          'guid': '2f56df4e-9f1d-4246-bbcf-99b1d03c44d9',
          'country': 'Cocos (Keeling Islands)',
          'name': 'Org Name',
          'email': 'example@mail.org',
          'description': 'Elit fugiat incididunt deserunt sint esse ad pariatur do.'
        },
        {
          'id': '5ee3b3e9cfc300538c265e2c',
          'index': 9,
          'guid': '2941bf37-fb51-4b0b-aed5-8e2080d4868d',
          'country': 'Senegal',
          'name': 'Org Name',
          'email': 'example@mail.org',
          'description': 'Lorem esse enim nostrud aliqua veniam quis velit consectetur excepteur quis sunt consectetur.'
        }
      ],
      error: false
    }
  },

  created: function () {
    this.fetchOrgs()
  },

  methods: {
    fetchOrgs (options = null) {
      let url = 'http://localhost:8000/api/orgs'

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
