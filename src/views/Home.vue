<template>
  <v-main>
    <v-container class="justify-center"
      id="manifest"
    >
      <p>The Erasmus platform is an amazing way to have experiences during youth and potentialialing the future of the next generations by having better exchanges and tools for them.</p>
      <p>Facebook Groups reach is less then 10% on all the members plus there is also a lot of spam on the Facebook groups making the job difficult to find new partners or participants for newer projects.</p>
      <p>We are creating a platform to help organisations, participants and trainers to have a better tool to work for the Future of Youth in Europe</p>
      <p class="justify-center">Contact us on the discord icon below if you wanna help.</p>
    </v-container>
    <v-container class="d-flex justify-center">
      <a href="https://discord.gg/QcVurqP" class="mx-auto">
        <img class="logo" :src="require('@/assets/img/discord.png')"/>
      </a>
    </v-container>

    <v-container class="mt-10">
      <v-row>
        <v-col class="md-4 text-center">
            <a href="/organisations">Organisations</a>
        </v-col>
        <v-col class="md-4 text-center">
          <v-container>
            <p>Projects</p>
            <small>Coming Soon</small>
          </v-container>
        </v-col>
        <v-col class="md-4 text-center">
            <p>Participants</p>
            <small>Coming Soon</small>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
 </template>

<style scoped>
  .logo{
    max-width: 64px;
    max-height: auto;
  }

  #manifest {
    max-width: 50%;
    line-height: 1.6;
  }
</style>
<script>
export default {
  name: 'Home'
}
</script>
