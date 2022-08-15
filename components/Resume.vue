<template>
    <a :href="'/pdf/ChrisRoweResume_August_2022.pdf'" download="ChrisRowe_Resume_2022.pdf" class="cursor-pointer">
        <div
            id="resume"
            class="mx-auto w-64 h-16 rounded-full flex items-center justify-center group"
            :style="this.styles"
        >
            <img
                class="mr-4 group-hover:hidden"
                :src="`/svg/${color === 'cyan' ? 'resume-drk':'resume'}.svg`"
                alt="Icon representing a document page"
            />
            <img
                v-if="color === 'gold'"
                class="mr-4 hidden group-hover:block"
                :src="`/svg/resume-gold.svg`"
                alt="Icon representing a document page"
            />
            <img
                v-if="color === 'cyan'"
                class="mr-4 hidden group-hover:block"
                :src="`/svg/resume-cyan.svg`"
                alt="Icon representing a document page"
            />
            <p
                :class="color === 'cyan' ? 'font-lato font-black text-2xl text-cr-dark group-hover:text-cr-cyan' : 'font-lato font-black text-2xl text-cr-light group-hover:text-cr-gold'"
            >
                My Resume
            </p>
        </div>
    </a>
</template>

<script>
    export default {
        props: {    
            color: {
                type: String,
                default: 'cyan'
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
            styles() {
                return {
                    'background-color': this.bgColor,
                    'border' : `4px solid ${this.bgColor}`
                }
            }
        }
    }
</script>

<style scoped>
    #resume:hover {
        background-color: transparent !important;
    }
</style>