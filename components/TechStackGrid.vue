<template>
    <div class="relative">
        <SectionHeader
            v-if="info.section"
            :title="info.section"
            :color="info.color"
            class="sticky top-0"
        />
        <!-- Grid container -->
        <div class="grid grid-cols-4">
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