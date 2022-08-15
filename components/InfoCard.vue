<template>
    <section
        class="w-full md:pr-28 lg:px-0"
        :style="{'background-color': bgColor}"
    >
        <!-- Card Start -->
        <article
            id="card"
            class="bg-cr-light rounded-lg w-[92%] mx-auto pt-12 px-4 pb-24
            md:pt-20 md:pb-32 md:pl-16 md:pr-12 md:w-full md:rounded-l-none md:rounded-r-[3rem]
            lg:pt-28 lg:pb-44 lg:rounded-none lg:px-36"
        >
            <div class="mx-auto max-w-[1600px]">
                <section
                    class="relative"
                    v-for="(section, index) in content"
                    :key="index"
                    :id="section.section"
                >
                    <!-- Decorative Element -even- (desktop only) -->
                    <div
                        v-if="index % 2 === 0"
                        class="clippedL decoration hidden absolute left-0 top-0 w-20 h-40 -translate-x-36 -translate-y-[calc(50%-2.5rem)] lg:block"
                        :style="{'background-color': bgColor}"
                    />
                    <!-- Decorative Element -odd- (desktop only) -->
                    <div
                        v-else
                        class="clippedR decoration hidden absolute right-0 top-0 w-20 h-40 translate-x-36 -translate-y-[calc(50%-2.5rem)] lg:block"
                        :style="{'background-color': bgColor}"
                    />
                    <!-- Content (tsg = Tech Stack Grid, an optional heading and an array of icons) -->
                    <TechStackGrid
                        v-if="section.sectionType === 'tsg'"
                        :info="section"
                    />
                    <!-- Content (lt1 = list type 1, an optional heading and bulleted list with (ideally) single line entries) -->
                    <ListType1
                        v-else-if="section.sectionType === 'lt1'"
                        :info="section"
                    />
                    <!-- Content (lt1 = list type 2, an optional heading and bulleted list with multi-line entries and a smaller text field below each entry) -->
                    <ListType2
                        v-else-if="section.sectionType === 'lt2'"
                        :info="section"
                    />
                    <!-- Content (wt1 = work type 1, heading, 3 thumbnails, tech stack icons, description, and 2 links) -->
                    <WorkType1
                        v-else-if="section.sectionType === 'wt1'"
                        :info="section"
                    />
                    <!-- Content (wt2 = work type 2, heading, 6 thumbnails, tech stack icons, description, and 2 links) -->
                    <WorkType2
                        v-else-if="section.sectionType === 'wt2'"
                        :info="section"
                    />
                </section>
                <Resume v-if="resume" :color="color"/>
            </div>
        </article>
        <!-- Dark Text and icon for Cyan BG -->
        <div
            v-if="this.color === 'cyan'"
            @click="scrollToTop"
            id="scroll-up"
            class="w-full flex flex-col items-center justify-center h-[11rem] mb-24 cursor-pointer space-y-6 md:mb-0 md:h-[18.5rem] md:translate-x-[3.5rem]
            lg:translate-x-0 lg:h-[20rem]"
        >
        <img id="up" class="lg:w-16 lg-h-auto" src="/svg/up-drk.svg" alt="arrow/chevron pointing up">
        <p class="font-museo font-extralight text-4xl text-cr-dark">back to top</p>
        </div>
        <!-- white Text and icon for other BG colors -->
        <div
            v-else
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
            },
            content: {
                type: Array,
                required: true
            },
            resume: {
                type: Boolean
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
    .clippedL {
        clip-path: polygon(0 0, 0% 100%, 100% 50%);
    }

    .clippedR {
        clip-path: polygon(0 50%, 100% 100%, 100% 0);

    }
    
    @media screen and (max-width: 300px) {
        #card {
            width: 100%;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
        }
    }
    
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