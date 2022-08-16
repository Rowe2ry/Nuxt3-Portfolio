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
    import data from '~/src/data/workPage.json';
    
    export default {
        head: {
            titleTemplate: 'Chris Rowe',
            meta: [
                { name: 'description', content: 'My portfolio.' }
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