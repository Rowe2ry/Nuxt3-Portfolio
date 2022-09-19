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
            <li
                v-for="(item, index) in info.listItems"
                :title="item"
                :key="index"
                class="flex items-start"   
            >
                <!-- Bullet Point -->
                <div 
                    class="h-[7px] w-[7px] aspect-square rounded-full mr-3 mt-[min(4.2vw,1.25rem)]
                    md:mt-[1.125rem] md:w-2.5 md:h-2.5
                    lg:mt-[min(1.67vw,1.5rem)]"
                    :style="{'background-color': pageColor}"
                />
                <p
                    v-html="item"
                    class="font-lato text-cr-dark text-[clamp(1rem,4.75vw,1.5rem)] leading-normal py-1
                    lg:text-[clamp(1.25rem,2.2vw,2rem)]"
                />
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
    @media screen and (min-width: 1080px) {
        ul {
        columns: 2;
        -webkit-columns: 2;
        -moz-columns: 2;
      }
    }
</style>