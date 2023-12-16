<template>
    <div class="relative">
        <SectionHeader
            v-if="info.section"
            :title="info.section"
            :color="info.color"
            class="sticky top-0 z-10"
        />
        <!-- unordered list container -->
        <ul class="w-full mb-16 md:mb-20 md:ml-4 lg:ml-10">
            <div
                class="my-8 flex items-center lg:my-12"
            >
                <!-- Icon -->
                <div class="aspect-square w-8 h-8 mr-4  lg:w-14 lg:h-14 lg:mr-6">
                    <img
                        :src="`/svg/${info.icon}`"
                        :alt="`An icon used to represent contacting me by ${info.section}`"
                        class="h-full w-auto mx-auto"
                    >
                </div>
                <!-- Text -->
                <p
                    v-html="info.text"
                    class="font-lato text-cr-dark text-[clamp(1rem,4.75vw,1.5rem)] leading-normal py-1
                    lg:text-[clamp(1.25rem,2.2vw,2rem)]"
                />
            </div>
        </ul>
        <!-- Desktop only image -->
        <img
            src="/svg/atl.svg"
            alt="Sinlge color vector graphic showing syline of Atlanta"
            class="hidden lg:block w-2/3 mx-auto pb-20"
        >
    </div>
</template>

<script>
    export default {
        props: {
            info: {
                type: Object,
                required: true
            },
            color: {
                type: String,
                default: 'cyan'
            },
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