<template>
    <div>
        {{org}}
    </div>
</template>

<script>
    export default {
        props:['org'],
        name: 'OrgInfo',
    
        data(){
            return {
                    orgs: [],
                    error: false                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>