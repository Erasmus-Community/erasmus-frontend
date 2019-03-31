<template>
    <div>
        <h1>All Projects</h1>
        <ProjectInfo v-for="proj in projects" :key="proj.key" :proj="proj"></ProjectInfo>
    </div>
</template>

<script>
    import ProjectInfo from '@/components/ProjectInfo.vue'
    
    export default {
        name: Project,
        components: {
            ProjectInfo
        }
    }
</script>

<style scoped>

</style>