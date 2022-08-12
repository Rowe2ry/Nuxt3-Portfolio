<template>
    <section
        class="w-full md:pr-28 lg:px-0"
        :style="{'background-color': this.bgColor}"
    >
        <article
            class="bg-cr-light rounded-lg w-[92%] mx-auto pt-14 px-4 pb-24
            md:pt-24 md:pb-32 md:w-full md:rounded-l-none md:rounded-r-[3rem]
            lg:pt-32 lg:pb-44 lg:rounded-none"
        >
            hi
        </article>
        <div
            @click="scrollToTop"
            id="scroll-up"
            class="w-full flex flex-col items-center justify-center h-[11rem] mb-24 cursor-pointer space-y-6 md:mb-0 md:h-[18.5rem] md:translate-x-[3.5rem]
            lg:translate-x-0 lg:h-[20rem]"
        >
        <img id="up" class="lg:w-16 lg-h-auto" src="/svg/up.svg" alt="arrow/chevron pointing up">
        <p class="font-museo font-extralight text-4xl text-cr-light">back to top</p>
        </div>
    </section>
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
        methods: {
            scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            },
        }
    }
</script>

<style scoped>
    #scroll-up:hover #up {
        animation: bouncy-jiggle 3.8s linear infinite;
        transform-origin: bottom;
    }

    @keyframes bouncy-jiggle {
        0%,
        5%,
        28%,
        36%,
        42%,
        48%,
        52%,
        56%,
        100%{
            transform: scaleX(1) scaleY(1) translateY(0) rotate(0);
        }

        3% {
            transform: scaleX(1.25) scaleY(0.7);
        }

        8% {
            transform: scaleX(.8) scaleY(1.2) translateY(-25%);
        }

        12% {
            transform: scaleX(.9) scaleY(1.1) translateY(-35%);
        }

        17% {
            transform: scaleX(1) scaleY(1) translateY(-40%);
        }

        22% {
            transform: scaleX(1) scaleY(1) translateY(-35%);
        }

        25% {
            transform: translateY(-25%);
        }

        30% {
            transform: scaleX(1.3) scaleY(0.7) translateY(0%);
        }

        33% {
            transform: scaleX(1) scaleY(1) rotate(-6deg);
        }
        
        39% {
            transform: scaleX(1) scaleY(1) rotate(5deg);
        }
        45% {
            transform: scaleX(1) scaleY(1) rotate(-4deg);
        }
        50% {
            transform: scaleX(1) scaleY(1) rotate(3deg);
        }
        54% {
            transform: scaleX(1) scaleY(1) rotate(-2deg);
        }
    }
</style>