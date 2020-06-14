<template>
    <v-content class="ma-4">
        <v-form v-model="valid">
            <v-text-field
              v-model="orgname"
              :error-messages="nameErrors"
              label="Organisation Name"
              required
              @input="$v.orgname.$touch()"
              @blur="$v.orgname.$touch()"
            ></v-text-field>
            <v-textarea
              v-model="description"
              label="Description"
              @input="$v.description.$touch()"
              @blur="$v.description.$touch()"
              required
            ></v-textarea>
            <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
            ></v-text-field>
            <v-select
                v-model="country"
                :items="countries"
                item-text="name"
                :error-messages="countriesErrors"
                label="Country"
                required
                @change="$v.country.$touch()"
                @blur="$v.country.$touch()"
            ></v-select>
            <v-select
              v-model="erasmus"
              :items="items"
              label="Erasmus"
              @change="$v.erasmus.$touch()"
              @blur="$v.erasmus.$touch()"
            ></v-select>
            <v-select
                v-model="interest"
                :items="items"
                label="Interests"
                @change="$v.interest.$touch()"
                @blur="$v.interest.$touch()"
            ></v-select>
            <v-btn @click="submit">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
        </v-form>
        <p class="mt-3 ml-2" v-if="submitMessage !== ''"> {{submitMessage}} </p>
    </v-content>
</template>

<script>
import axios from 'axios'
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import { setTimeout } from 'timers'

export default {
  mixins: [validationMixin],

  validations: {
    orgname: { required },
    email: { required, email },
    country: { required },
    description: { required },
    interest: {},
    erasmus: {}
  },

  data: () => ({
    valid: false,
    orgname: '',
    email: '',
    country: '',
    description: '',
    countries: [],
    interest: '',
    erasmus: '',
    submitMessage: '',
    items: [] // to be changed
  }),

  created () {
    axios.get('https://restcountries.eu/rest/v2/all').then(info => {
      this.countries = info.data
    })
  },

  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.orgname.$dirty) return errors
      !this.$v.orgname.required && errors.push('Organisation Name is required.')
      return errors
    },

    countriesErrors () {
      const errors = []
      if (!this.$v.country.$dirty) return errors
      !this.$v.country.required && errors.push('Item is required')
      return errors
    },

    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  },

  methods: {
    clear () {
      this.$v.$reset()
      this.orgname = ''
      this.email = ''
      this.country = ''
      this.description = ''
      this.interest = ''
      this.erasmus = ''
    },

    submit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
      } else {
        // do your submit logic here
        axios.post('http://127.0.0.1:8000/api/orgs/',
          {
            name: this.orgname,
            description: this.description,
            email: this.email,
            erasmus: [],
            interests: [],
            country: this.country
          }
        ).then(info => {
          this.submitMessage = 'Organisation was created. Redirecting to the created organization page.'
          setTimeout(() => this.$router.push(
            { name: 'orgInfo', params: { id: info.data.id } }),
          5000)
        }).catch(err => {
          this.submitMessage = err
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
