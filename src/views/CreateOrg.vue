<template>
    <v-content class="ma-3">
        <v-form v-model="valid">
            <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="Organisation Name"
                required
            ></v-text-field>
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
            ></v-text-field>
            <v-select
                v-model="select"
                :items="items"
                :error-messages="selectErrors"
                label="Country"
                required
                @change="$v.select.$touch()"
                @blur="$v.select.$touch()"
            ></v-select>
            <v-select
                v-model="select"
                :items="items"
                :error-messages="selectErrors"
                label="Interests"
                required
                @change="$v.select.$touch()"
                @blur="$v.select.$touch()"
            ></v-select>
            <v-btn @click="submit">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
        </v-form>
    </v-content>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    })
  }
</script>

<style lang="scss" scoped>

</style>