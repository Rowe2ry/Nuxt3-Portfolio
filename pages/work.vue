<template>
    <div>
        <Hero
            :title="this.pageData.pageTitle"
            :tagline="this.pageData.tagline"
            :color="this.pageData.color"
        />
        <InfoCard
            id="infoCard"
            :color="this.pageData.color"
            :content="this.pageData.sections"
            :resume="this.pageData.resume"
        />
    </div>
</template>

<script>
    import data from '~/static/data/workPage.json';
    
    export default {
        head: {
            titleTemplate: 'Chris Rowe',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                { name: 'description', content: 'My portfolio.' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            link: [
                { rel: "icon", type: "image/x-icon", href: "/wfavicon.ico" },
            ]
        },
        data() {
            return {
                pageData: data
            }
        }
    }

</script>