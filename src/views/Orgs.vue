<template>
    <v-content>
        <h1> Organizations </h1>
        <!-- ADD FILTER HERE FOR THE TABLE LATER -->
        <v-data-table
            :headers="headers"
            :items="orgs"
            class="elevation-1"
        >
            <template v-slot:items="props">
                <td>{{props.item.name}}</td>
                <td>{{props.item.country}}</td>
                <td>{{props.item.interests}}</td>
                <td>
                    <router-link :to="{name: 'orgInfo', params: { id: props.item.id}}">
                        <button>
                                More Info
                        </button>
                    </router-link>
                  </td>
            </template>

        </v-data-table>
    </v-content>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'orgs',

        data() {
            return {
                orgs: [],
                headers: [
                    { text: 'Organization Name', value: 'name' },
                    { text: 'Country', value: 'country' },
                    { text: 'Interests', value: 'interests' },
                    { text: 'More Info', value: ''}
                ],
                error: false             
            }
        },
        
        created(){
            this.fetchOrgs();
        },

        methods: {
            fetchOrgs() {
                axios.get('http://127.0.0.1:8000/api/orgs/').then(response => {
                    this.orgs = response.data;
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container-orgs{
        display: grid;
        grid-template-columns: auto 10% 20%;
    }
</style>
