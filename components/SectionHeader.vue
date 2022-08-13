<template>
    <div class="relative w-full">
        <h3 class="font-museo font-bold text-[1.375rem] leading-none">
            {{title}}
        </h3>
        <!-- horizontal rule -->
        <div
            class="mx-auto mt-4 mb-6 w-[min(73vw,17.25rem)] h-[2px] rounded-full"
            :style="{'background-color': pageColor}"
        />
    </div>

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