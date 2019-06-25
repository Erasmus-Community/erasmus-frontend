<template>
    <v-content class="ma-3">
        <v-form v-model="valid">
            <v-text-field
              v-model="orgname"
              :error-messages="nameErrors"
              label="Organisation Name"
              required
              @input="$v.orgname.$touch()"
              @blur="$v.orgname.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="description"
              label="Description"
              @input="$v.description.$touch()"
              @blur="$v.description.$touch()"
            ></v-text-field>
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
              :items="erasmus"
              @change="$v.erasmus.$touch()"
              @blur="$v.erasmus.$touch()"
            ></v-select>
            <v-select
                v-model="interests"
                :items="items"
                label="Interests"
            ></v-select>
            <v-btn @click="submit">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
        </v-form>
    </v-content>
</template>

<script>
  import axios from 'axios'
  import { validationMixin } from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'
  
  export default {
    mixins: [validationMixin],
    
    validations : {
      orgname: { required },
      email: { required, email},
      country: { required }

    },

    data: () => ({
      valid: false,
      orgname: '',
      email: '',
      country: '',
      description: '',
      countries: [],
      interests: null,
      erasmus: null,
      items: [], // to be changed
    }),

    created(){
      axios.get('https://restcountries.eu/rest/v2/all').then( info => {
        this.countries = info.data; 
      });
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

    methods:{
      clear: function(event){
        console.log(event);
      },
      
    submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        console.log('error')
      } else {
        // do your submit logic here
        console.log('ok');
      }
    }
    }
  }
</script>

<style lang="scss" scoped>

</style>