<template>
    <div>
        <SectionHeader v-if="title" :title="title"/>
    </div>
</template>

<script>
    export default {
        props: {
            info: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>