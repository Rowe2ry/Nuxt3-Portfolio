<template>
    <div class="relative">
        <SectionHeader
            v-if="info.section"
            :color="info.color"
            class="sticky top-0 z-10"
        />
        <!-- unordered list container -->
        <ul class="w-full mb-16 md:mb-20 md:ml-4 lg:ml-10">
            <li
                v-for="(link, index) in info.list"
                :key="index"
                class="my-8 lg:my-12"
            >
                <a
                    :href="link.link"
                    target="_blank"
                    class="cursor-pointer flex items-center"
                >
                    <!-- Icon -->
                    <div class="aspect-square w-8 h-8 mr-4 lg:w-14 lg:h-14 lg:mr-6">
                        <img
                            :src="`/svg/${link.icon}`"
                            :alt="`An icon used to represent contacting me by ${info.plainName ? info.plainName : info.section} via`"
                            class="h-full w-auto mx-auto"
                            :class="link.icon === 'indeed.svg' ? '-translate-x-[17%]':''"
                        >
                    </div>
                    <!-- Text -->
                    <p
                        v-html="link.text"
                        class="font-lato text-cr-dark underline text-[clamp(1rem,4.75vw,1.5rem)] leading-normal py-1
                        lg:text-[clamp(1.25rem,2.2vw,2rem)]"
                    />
                </a>
            </li>
        </ul>
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
            index: {
                type: Number
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