<template>
    <article
        class="flex flex-col items-center
        lg:grid grid-cols-[2fr_1fr] lg:items-start"
    >
        <!-- images -->
        <div
            class="w-full relative
            md:aspect-square md:w-11/12 md:-mt-32 md:pt-20 md:max-w-[575px] md:flex items-start
            lg:order-2 lg:aspect-auto"
        >
            <!-- Main thumbnail -->
            <a :href="info.linkOne" target="_blank" class="cursor-pointer">
                <img
                    class="aspect-square w-5/6 mx-auto rounded-lg border-2 border-cr-dark mb-4 z-10
                    md:absolute md:left-0 md:bottom-0 md:w-1/2 md:max-h-full
                    lg:left-auto lg:bottom-auto lg:relative lg:w-11/12 lg:mr-0 lg:-mb-6 lg:mt-32"
                    :src="`/image/${info.mainImg}`"
                    :alt="`Screenshot of the ${info.section}project.`"
                />
            </a>
            <!-- Image 2 -->
            <a :href="info.linkOne" target="_blank" class="cursor-pointer w-full">
                <img
                    class="hidden rounded-lg border-2 border-cr-dark h-2/3 translate-x-[150%]
                    md:block
                    lg:w-3/4 lg:ml-0 lg:mr-auto"
                    :src="`/image/${info.img2}`"
                    :alt="`Screenshot of the ${info.section}project.`"
                />
            </a>
            <!-- Image 3 -->
            <a :href="info.linkOne" target="_blank" class="cursor-pointer w-full">
                <img
                    class="hidden rounded-lg border-2 border-cr-dark h-1/4 mt-20 -ml-5 translate-x-[125%]
                    md:block
                    lg:-mr-6 lg:w-1/2 lg:-translate-y-1/4"
                    :src="`/image/${info.img3}`"
                    :alt="`Screenshot of the ${info.section}project.`"
                />
            </a>
            <!-- Image 4 -->
            <a :href="info.linkOne" target="_blank" class="cursor-pointer w-full">
                <img
                    class="hidden rounded-lg border-2 border-cr-dark h-3/4 mt-4 -ml-10 translate-x-[125%]
                    md:block
                    lg:-mr-6 lg:w-1/2 lg:-translate-y-1/4"
                    :src="`/image/${info.img4}`"
                    :alt="`Screenshot of the ${info.section}project.`"
                />
            </a>
            <!-- Image 5 -->
            <a :href="info.linkOne" target="_blank" class="cursor-pointer w-full">
                <img
                    class="hidden rounded-lg border-2 border-cr-dark h-1/2 mt-24 -ml-16 translate-x-[125%]
                    md:block
                    lg:-mr-6 lg:w-1/2 lg:-translate-y-1/4"
                    :src="`/image/${info.img5}`"
                    :alt="`Screenshot of the ${info.section}project.`"
                />
            </a>
            <!-- Image 6 -->
            <a :href="info.linkOne" target="_blank" class="cursor-pointer w-full">
                <img
                    class="hidden rounded-lg border-2 border-cr-dark h-1/2 w-auto mt-16 -ml-20 translate-x-[125%]
                    md:block
                    lg:-mr-6 lg:w-1/2 lg:-translate-y-1/4"
                    :src="`/image/${info.img6}`"
                    :alt="`Screenshot of the ${info.section}project.`"
                />
            </a>
        </div>
        <!-- all copy section (flex container on lg) -->
        <div class="lg:flex lg:flex-col lg:order-1 lg:items-center">
            <!-- Heading -->
            <SectionHeader
                :title="info.section"
                :color="info.color"
                class="lg:order-1"
            />
            <!-- Tech Stack for Project -->
            <TechStackGrid
                class="lg:order-3 lg:w-4/5"
                :info="info"
            />
            <!-- Project Description -->
            <p
                class="-mt-16 px-4 font-lato font-normal text-cr-dark text-[clamp(1rem,4.75vw,1.25rem)]
                md:px-0
                lg:mt-0 lg:mb-10 lg:text-[clamp(1.25rem,2.2vw,2rem)] lg:pl-10 lg:pr-16 lg:order-2"
            >
                {{info.projDesc}}
            </p>
            <!-- CTA Buttons -->
            <div
                class="w-full flex flex-col items-center z-10
                md:flex-row md:flex-nowrap md:max-w-[35rem] lg:order-4 lg:-mt-36"
            >
                <!-- Visit Project Btn -->
                <div class="w-full">
                    <a
                        :href="info.linkOne"
                        class="cursor-pointer"
                    >
                        <div
                            class="mx-auto mt-8 w-[min(90%,16rem)] h-16 rounded-full flex items-center justify-center group bg-cr-pink border-2 border-cr-pink
                            hover:bg-transparent"
                        >
                            <p
                                class="font-lato font-black text-xl text-cr-light group-hover:text-cr-pink"
                            >
                                {{info.btnOne}}
                            </p>
                        </div>
                    </a>
                </div>
                <!-- Visit Repo Btn -->
                <div class="w-full">
                    <a
                        :href="info.linkTwo"
                        class="cursor-pointer"
                    >
                        <div
                            class="mx-auto mt-4 w-[min(90%,16rem)] h-8 rounded-full flex items-center justify-center group
                            md:h-16 md:bg-cr-pink md:border-2 md:border-cr-pink md:hover:bg-transparent md:mt-8"
                        >
                            <p
                                class="floating-link relative font-lato font-black text-xl text-cr-pink
                                md:text-cr-light md:group-hover:text-cr-pink"
                            >
                                {{info.btnTwo}}
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </article>
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

    @media screen and (max-width: 640px) {
        .floating-link:after {
            content: '';
            background-color: #C500C5;
            width: 100%;
            height: 3px;
            position: absolute;
            left: 0;
            bottom: 0;
            transform-origin: right;
            transition: transform 250ms ease-in;
            transform: scaleX(0) translateY(3px);
        }

        .floating-link:hover:after {
            content: '';
            background-color: #C500C5;
            width: 100%;
            height: 3px;
            position: absolute;
            left: 0;
            bottom: 0;
            transform-origin: left;
            transition: transform 250ms ease-in;
            transform: scaleX(1) translateY(3px);
        }
    }

</style>