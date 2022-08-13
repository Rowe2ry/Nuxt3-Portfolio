<template>
    <div class="relative">
        <SectionHeader
            v-if="info.section"
            :title="info.section"
            :color="info.color"
            class="sticky top-0 z-10"
        />
        <!-- unordered list container -->
        <ul class="w-full">
            <li
                v-for="(item, index) in info.listItems"
                :key="index"
                class=""
                v-html="item"
            />
        </ul>
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