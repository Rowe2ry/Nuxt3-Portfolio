<template>
    <div
        :class="count === 20? 'hidden flex-col items-center justify-center w-full h-full pb-5 lg:flex' : 'flex flex-col items-center justify-center w-full h-full pb-5'"
    >
        <div class="w-10 h-10 flex items-center justify-center group md:w-14 md:h-14">
            <img
                class="md:scale-125 lg:scale-150"
                :src="`/svg/techStackIcons/${color}/${tech.icon}`"
                :alt="`Brand icon for the ${tech.techName} technology.`"
            />
            <div
            class="hidden fixed z-20 left-0 top-0  rounded-br-2xl border-2 bg-cr-light
            w-1/3 p-8 shadow-lg lg:group-hover:block"
        >
            <h4 class="font-lato font-bold text-cr-dark text-2xl">
                <dfn v-if="tech.abbr">{{tech.abbr}}</dfn>
                <dfn v-else>{{tech.techName}}</dfn>
            </h4>
            <div
                class="w-2/3 h-[2px] rounded-full my-4 bg-cr-gray"
            ></div>
            <p class="font-lato text-cr-dark font-normal">
                {{tech.desc}}
            </p>
        </div>
        </div>
        <p class="font-lato font-bold text-[min(0.875rem,3.7vw)]  text-center whitespace-nowrap md:text-lg lg:text-2xl">
            {{tech.techName}}
        </p>
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