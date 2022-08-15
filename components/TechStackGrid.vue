<template>
    <div class="relative w-full">
        <SectionHeader
            v-if="info.section && info.color !== 'pink'"
            :title="info.section"
            :color="info.color"
            class="sticky top-0 z-10"
        />
        <!-- Grid container -->
        <div
            :class="info.color === 'pink' ?
            'grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 mb-16 md:mb-20 lg:mb-36':
            'grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 mb-16 md:mb-20 lg:mb-36'"
        >
            <TechStackIcon
                v-for="(technology, index) in info.techs"
                :key="index"
                :color="info.color"
                :tech="technology"
                :count="index"
            />
        </div>
    </div>
</template>

<script>
import TechStackIcon from './TechStackIcon.vue'
    export default {
  components: { TechStackIcon },
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