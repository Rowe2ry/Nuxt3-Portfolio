<template>
    <div
        :class="count === 20? 'hidden flex-col items-center justify-center w-full h-full group pb-5 lg:flex' : 'flex flex-col items-center justify-center w-full h-full group pb-5'"
    >
        <img
            :src="`/svg/techStackIcons/${color}/${tech.icon}`"
            :alt="`Brand icon for the ${tech.techName} technology.`"
        />
        <p class="font-lato font-bold text-sm">
            {{tech.techName}}
        </p>
        <div
            class="hidden fixed left-1/2 top-24 -translate-x-1/2  rounded-2xl border-2 bg-cr-light
            w-[800px] p-8 lg:group-hover:block"
        >
            <h4 class="font-lato font-bold text-cr-dark text-2xl">
                <dfn v-if="tech.abbr">{{tech.abbr}}</dfn>
                <dfn v-else>{{tech.techName}}</dfn>
            </h4>
            <div
                class="w-full h-6 rounded-full my-4 bg-cr-light"
            ></div>
            <p class="font-lato text-cr-dark font-normal">
                {{tech.desc}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            color: {
                type: String,
                default: 'cyan'
            },
            tech: {
                type: Object,
                required: true
            },
            count: {
                type: Number
            }
        },
    }
</script>

<style scoped>

</style>