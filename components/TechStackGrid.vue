<template>
    <div>
        <SectionHeader v-if="title" :title="title"/>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String
            }
        }
    }
</script>

<style scoped>

</style>