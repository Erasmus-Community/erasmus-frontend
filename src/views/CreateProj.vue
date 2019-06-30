<template>
    <v-content class="ma-4">
        <v-form v-model="valid">
            <v-text-field
              v-model="projectname"
              :error-messages="nameErrors"
              label="Organisation Name"
              required
              @input="$v.projectname.$touch()"
              @blur="$v.projectname.$touch()"
            ></v-text-field>
            <v-textarea
              v-model="description"
              label="Description"
              @input="$v.description.$touch()"
              @blur="$v.description.$touch()"
              required
            ></v-textarea>
            <v-select
                v-model="host_org"
                disabled
                label="Hosting Organisation"
                required
            >
            </v-select>
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
  import { setTimeout } from 'timers';
  
  export default {
    props:['orgId'],
    mixins: [validationMixin],
    
    validations : {
      projectname: { required },
      description: { required },
    },

    data: () => ({
      valid: false,
      projectname: '',
      description: '',
      submitMessage: '',
      host_org: ''
    }),

    created(){
        axios.get(`http://127.0.0.1:8000/api/orgs/${this.orgId}`).then( info => {
        this.host_org = info.data
        });
    },

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.projectname.$dirty) return errors
        !this.$v.projectname.required && errors.push('Project Name is required.')
        return errors
      }
    },

    methods:{
      clear () {
        this.$v.$reset();
        this.projectname = '';
        this.description = '';
      },
      
    submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
      } else {
        // do your submit logic here
        axios.post('http://127.0.0.1:8000/api/projects/',
          {
            name: this.orgname,
            description: this.description,
            host_org: this.email,
            sender_countries: [],
          }
        ).then( info => {
          this.submitMessage = 'Organisation was created. Redirecting to the created organization page.'
          setTimeout( () => this.$router.push(
              { name: 'projectInfo', params:{ id: info.data.id }}),
          5000);
          
        }).catch( err => {
          this.submitMessage = err;
        });
      }
    }
    }
  }
</script>

<style lang="scss" scoped>
</style>