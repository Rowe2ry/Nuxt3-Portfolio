<template>
    <div class="flex flex-col items-center justify-center w-full h-full group">
        <img
            :src="`/svg/${this.color}/${this.icon}`"
            :alt="`Brand icon for the ${this.tech} technology.`"
        />
        <p class="font-lato font-bold text-sm">
            {{this.tech}}
        </p>
        <div
            class="hidden fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 bg-cr-light
            w-1/4 p-8 lg:group-hover:block duration:300"
            :style="{'border-color':this.pageColor}"
        >
            <h4 class="font-lato font-bold text-cr-dark text-2xl">
                <dfn v-if="this.abbr">{{this.abbr}}</dfn>
                <dfn v-else>{{this.tech}}</dfn>
            </h4>
            <div
                class="w-full h-6 rounded-full my-4"
                :style="{'background-color': this.pageColor}"
            />
            <p class="font-lato text-cr-dark font-normal">
                {{this.desc}}
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
                type: String,
                required: true
            },
            icon: {
                type: String,
                required: true
            },
            abbr: {
                type: String
            },
            desc: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                pageColor = ''
            }
        },
        mounted() {
            if (this.color === 'pink') {
                this.pageColor = '#C500C5';
            } else if (this.color === 'gold') {
                this.pageColor = '#EEAB00';
            } else {
                this.pageColor = '#00EAD0'
            }
        }
    }
</script>

<style scoped>

</style>