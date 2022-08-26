<template>
    <div
        class="flex flex-col items-center justify-center w-full h-full pb-5"
    >
        <div class="w-10 h-10 flex items-center justify-center group md:w-14 md:h-14">
            <img
                class="md:scale-125 lg:scale-150 lg:cursor-progress"
                :src="`/svg/techStackIcons/${color}/${tech.icon}`"
                :alt="`Brand icon for the ${tech.techName} technology.`"
            />
            <div
            class="hidden fixed z-20 left-0 top-0 -translate-x-[105%] -translate-y-[4px] duration-300 delay-500 rounded-br-3xl bg-cr-light
            w-1/3 p-8 shadow-lg lg:block lg:group-hover:-translate-x-[4px]"
            :style="{'border': `4px solid ${bgColor}`}"
        >
            <h4 class="font-lato font-bold text-cr-dark text-2xl">
                <dfn v-if="tech.abbr">{{tech.abbr}}</dfn>
                <dfn v-else>{{tech.techName}}</dfn>
            </h4>
            <div
                class="w-2/3 h-[2px] rounded-full my-4"
                :style="{'background-solor': bgColor}"
            ></div>
            <p class="font-lato text-cr-dark font-normal">
                {{tech.desc}}
            </p>
        </div>
        </div>
        <p
            :class="color === 'pink' ?
            'font-lato font-bold text-[min(0.875rem,3.7vw)] text-center whitespace-nowrap md:text-[min(2.5vw,1.125rem)] lg:text-[min(1.4vw,1.5rem)]'
            :
            'font-lato font-bold text-[min(0.875rem,3.7vw)] text-center whitespace-nowrap md:text-[min(2.5vw,1.125rem)] lg:text-2xl'"
        >
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
        data() {
            return {
                bgColor: '',
            }
        },
        mounted() {
            switch (this.color) {
                case 'pink':
                    this.bgColor = '#C500C5';
                    break;
                case 'gold':
                    this.bgColor = '#EEAB00';
                    break;
                default:
                    this.bgColor = '#00EAD0';
            }
        },
        computed: {
            stylesOne() {
                return {
                    'background-color': this.bgColor,
                    'border' : `4px solid ${this.bgColor}`
                }
            },
            stylesTwo() {
                return {
                    'background-color': this.bgColor,
                    'border' : `4px solid ${this.bgColor}`
                }
            }
        }
    }
</script>

<style scoped>

</style>