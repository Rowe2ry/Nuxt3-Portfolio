<template>
    <header class="relative w-full bg-cr-light pt-2 md:pt-4">
        <h3
            class="font-museo font-bold text-[1.375rem] text-cr-dark leading-none pb-4 md:text-[2rem] lg:text-6xl lg:pb-8"
            v-html="title"
        >
        </h3>
        <!-- horizontal rule -->
        <div
            class="ml-3 mb-6 w-[min(70vw,17.25rem)] h-[2px] rounded-full lg:mb-14 lg:h-[4px]"
            :class="$route.fullPath !== '/contact' ? 'lg:w-[25rem]':''"
            :style="{'background-color': pageColor}"
        />
    </header>

</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            color: {
                type: String,
                default: 'cyan'
            }
        },
        data() {
            return {
                pageColor: '#00EAD0'
            }
        },
        mounted() {
            switch (this.color) {
            case 'pink':
                this.pageColor = '#C500C5';
                break;
            case 'gold':
                this.pageColor = '#EEAB00';
                break;
            default:
                this.pageColor = '#00EAD0';
            }
        }
    }
</script>

<style scoped>

</style>