<template>
    <div>
        <Hero
            :page="pageData.pageTitle"
            :simplename="pageData.plainTitle ? pageData.plainTitle : pageData.pageTitle"
            :tagline="pageData.tagline"
            :color="pageData.color"
        />
        <InfoCard
            id="infoCard"
            :color="pageData.color"
            :content="pageData.sections"
            :resume="pageData.resume"
        />
    </div>
</template>

<script>
    import data from '~/static/data/aboutPage.json';
    
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
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            ]
        },
        data() {
            return {
                pageData: data
            }
        }
    }

</script>