<template>
    <article
        class="pb-24 flex flex-col items-center
        md:pb-36
        lg:grid grid-cols-[2fr_1fr] lg:items-start"
    >
        <!-- images -->
        <div
            class="w-full relative
            md:aspect-video md:w-11/12 md:max-w-[575px]
            lg:order-2 lg:aspect-auto"
        >
            <!-- Main thumbnail -->
            <a :href="info.linkOne" target="_blank" class="cursor-pointer">
                <img
                    class="aspect-square w-5/6 mx-auto rounded-lg border-2 border-cr-dark mb-4 z-10
                    md:absolute md:left-0 md:bottom-0 md:w-auto md:h-full
                    lg:left-auto lg:bottom-auto lg:relative lg:w-11/12 lg:mr-0 lg:-mb-6 lg:mt-32"
                    :src="`/image/${info.mainImg}`"
                    :alt="`Screenshot of the ${info.section}project.`"
                />
            </a>
            <!-- Image 2 -->
            <a :href="info.linkOne" target="_blank" class="cursor-pointer">
                <img
                    class="hidden rounded-lg border-2 border-cr-dark w-1/2 ml-auto mr-6
                    md:block
                    lg:w-3/4 lg:ml-0 lg:mr-auto"
                    :src="`/image/${info.img2}`"
                    :alt="`Screenshot of the ${info.section}project.`"
                />
            </a>
            <!-- Image 3 -->
            <a :href="info.linkOne" target="_blank" class="cursor-pointer">
                <img
                    class="hidden rounded-lg border-2 border-cr-dark w-1/3 ml-auto -translate-y-1/2 -mr-2
                    md:block
                    lg:-mr-6 lg:w-1/2 lg:-translate-y-1/4"
                    :src="`/image/${info.img3}`"
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
                        target="_blank"
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
                        v-if="info.repoAvail"
                        :href="info.linkTwo"
                        class="cursor-pointer"
                    >
                        <div
                            class="mx-auto mt-4 w-[min(90%,16rem)] h-8 rounded-full flex items-center justify-center group cursor-pointer
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
                    <!-- no repo -->
                    <div
                        v-else
                        class="cursor-not-allowed mx-auto mt-4 w-[min(90%,16rem)] h-8 rounded-full flex items-center justify-center group
                        md:h-16 md:bg-cr-gray md:mt-8"
                    >
                        <div class="text-center">
                            <p
                                class="font-lato font-black text-xl text-[#808080]
                                md:text-cr-light md:text-[min(2.72vw,1.25rem)]"
                            >
                                {{info.btnTwo}}
                            </p>
                            <p
                                class="font-lato font-black text-base text-[#808080]
                                md:text-cr-light"
                            >
                                {{info.btnTwoDesc}}
                            </p>
                        </div>
                    </div>
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