<template>
    <v-content>
        <h1> Organizations </h1>
        <!-- ADD FILTER HERE FOR THE TABLE LATER -->
        <table>
            <thead>
                <tr>
                    <td>Organization Name</td>
                    <td>Country</td>
                    <td>Interests</td>
                    <td>More Info</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="org in orgs" v-bind:key = org.id>
                    <td>{{org.name}}</td>
                    <td>{{org.country}}</td>
                    <td>{{org.interests}}</td>
                    <td>
                        <button></button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <v-btn color="success">Success</v-btn>
            <v-btn color="error">Error</v-btn>
            <v-btn color="warning">Warning</v-btn>
            <v-btn color="info">Info</v-btn>
        </div>
    </v-content>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'orgs',

        data() {
            return {
                orgs: [],
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
