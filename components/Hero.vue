<template>
    <section
        class="relative w-full min-h-[calc(100vh-6rem)] overflow-x-hidden
            md:min-h-screen lg:overflow-hidden"
        :style="{'background-color': this.heroColor}"
    >
        <!-- Circuitry backdrop (desktop only) -->
        <img
            class="hidden absolute left-0 top-0 w-full h-full lg:block object-cover"
            src="/svg/circuitry.svg"
            alt="computer circruit vector artwork">
        <!-- Main Heading -->
        <h1
            class="absolute leading-none left-[5.5vw] top-32 text-cr-light font-museo text-[15.5vw] font-bold
            md:left-[min(3.5rem,5.5vw)] md:text-8xl md:top-28
            lg:text-[min(9vw,8rem)] lg:top-60 lg:left-24"
        >
            Chris<br class="md:hidden"> Ro<span class="alt-char">w</span>e
        </h1>
        <!-- Sub-Heading -->
        <h2
            class="absolute left-[5.625vw] top-[calc(14.5rem+20vw)] uppercase font-museo text-cr-dark text-[8.5vw] font-bold
            md:left-[min(3.5rem,5.5vw)] md:text-[min(5.2vw,2.5rem)] md:top-60
            lg:top-96 lg:left-24 lg:text-6xl"
            v-html="title"
        />
        <!-- Taper (tablet only) -->
        <div 
            class="trapezoid hidden md:block absolute bg-cr-light w-full h-96 top-56 lg:hidden"
        />
        <!-- Image -->
        <div class="absolute top-24 right-0 hero__img rounded-full overflow-hidden translate-x-4 shadow-md
        md:translate-x-0 md:right-28 md:top-60">
            <img
                class="object-cover"
                src="/image/self.PNG"
                alt="Chris Rowe blck and white headshot over plain background, cropped to face in circle" />
        </div>
        <!-- tagline backing (desktop only) -->
        <div
            class="in-from-left hidden lg:block bg-cr-light w-[40.5rem] h-32 rounded-r-full absolute left-0 top-[36.25rem] -translate-x-[36.5rem]"
        />
        <!-- Wave (mobile only) -->
        <svg
            class="absolute fill-cr-light bottom-[4.5rem] md:hidden"
            id="wave" xmlns="http://www.w3.org/2000/svg" width="1700" height="140"
            viewBox="0 0 1700 140"
        >
            <path d="M1700,0V124.12c-21.73,0-43.44,2.23-64.85,6.73-60.63,12.67-107.93,6.77-136.99-.96-34.41-9.19-94.92-15.83-158.88,1.52-42.18,11.45-86.38,11.45-128.56,0-63.96-17.35-124.44-10.71-158.88-1.52-29.06,7.73-76.36,13.63-136.99,.96-21.41-4.5-43.12-6.73-64.85-6.73s-43.44,2.23-64.85,6.73c-60.63,12.67-107.93,6.77-136.99-.96-34.41-9.19-94.92-15.83-158.88,1.52-42.18,11.45-86.38,11.45-128.56,0-63.96-17.35-124.44-10.71-158.88-1.52-29.06,7.73-76.36,13.63-136.99,.96-21.41-4.5-43.12-6.73-64.85-6.73V0C23.43,0,46.89,2.75,69.84,8.22c71.67,17.07,121.55,15.09,153.32,7.08,31.52-7.94,86.24-15.28,146.36-.98,36.46,8.69,74.5,8.69,110.96,0,60.12-14.3,114.84-6.96,146.36,.98,31.8,8.01,81.65,9.99,153.32-7.08,22.95-5.47,46.41-8.22,69.84-8.22s46.89,2.75,69.84,8.22c71.67,17.07,121.55,15.09,153.32,7.08,31.52-7.94,86.24-15.28,146.36-.98,36.46,8.69,74.5,8.69,110.96,0,60.12-14.3,114.84-6.96,146.36,.98,31.8,8.01,81.65,9.99,153.32-7.08,22.95-5.47,46.41-8.22,69.84-8.22Z"/>
        </svg>
        <!-- Tagline -->
        <p
            id="tagline"
            class="font-lato font-black w-[275px] text-cr-dark absolute left-[5.5vw] bottom-[7rem] text-xl
            md:left-[min(4.5rem,9vw)] md:bottom-auto md:top-[420px]
            lg:text-[2rem] lg:w-[450px] lg:left-32 lg:top-[38.375rem] lg:opacity-0 lg:-translate-y-1/2"
            v-html="tagline"
        />
        <!-- scroll down div -->
        <div 
            @click="scrollDown()"
            class="w-full h-20 bottom-0 cursor-pointer group absolute overflow-hidden flex items-center justify-center
            lg:h-32"
        >
            <p class="text-cr-light w-24 text-right pr-4 uppercase font-lato font-black text-xl duration-300 translate-y-full opacity-0
            lg:text-3xl lg:pr-20 lg:w-48
            group-hover:translate-y-0 group-hover:opacity-100">
                scroll
            </p>
            <img class="bouncy lg:w-16 lg-h-auto" src="/svg/down.svg" alt="chevron arrow pointing down">
            <p class="text-cr-light w-24 pl-4 uppercase font-lato font-black text-xl duration-300 translate-y-full opacity-0 group-hover:translate-y-0
            lg:text-3xl lg:pl-20 lg:w-48
            group-hover:opacity-100">
                down
            </p>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Web Developer'
        },
        tagline: {
            type: String,
            default: 'Hi there! Allow me to introduce mself...'
        },
        color: {
            type: String,
            default: 'cyan'
        }
    },
    data() {
        return {
            heroColor: '',
        }
    },
    mounted() {
        switch (this.color) {
            case 'pink':
                this.heroColor = '#C500C5';
                break;
            case 'gold':
                this.heroColor = '#EEAB00';
                break;
            default:
                this.heroColor = '#00EAD0';
        }
    },
    methods: {
        scrollDown() {
            window.scrollTo({
                    top: 600,
                    behavior: 'smooth'
                });
        }
    }
}
</script>

<style scoped>
    #wave {
        animation: ocean-waves 60s linear infinite;
    }
    
    @keyframes ocean-waves {
        0%,
        100% {
            transform: translateX(0%);
        }
        50% {
            transform: translateX(-50%);
        }
    }

    .bouncy {
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

    .hero__img {
        width: 42vw;
        height: 42vw;
    }

    .trapezoid {
        clip-path: polygon(0 44%, 100% 0, 100% 30%, 0% 100%);
    }

    .alt-char {
        font-feature-settings: "ss01";
    }

    @media screen and (min-width: 640px) {
        .hero__img {
            width: 26vw;
            height: 26vw;
        }
    }

    @media screen and (min-width: 1080px) {
        .in-from-left {
            animation: in-from-the-left 450ms ease-in 600ms forwards;
        }

        #tagline {
            animation: fade-down-tag 400ms ease-out 1100ms forwards;
        }
    }

    @keyframes in-from-the-left {
        0% {
            transform: translateX(-36.5rem)
        }
        100% {
            transform: translateX(0);
        }
    }

    @keyframes fade-down-tag {
        0% {
            opacity: 0;
            transform: translateY(-50%);
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

</style>