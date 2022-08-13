<template>
    <div>
        <Hero
            :title="pageData.pageTitle"
            :tagline="pageData.tagline"
            :color="pageData.color"
        />
        <InfoCard
            id="infoCard"
            :color="pageData.color"
            :content="pageData.sections"
            :resume="pageData.resume"
        />
        <Nav/>
    </div>
</template>

<script>
    import data from '~/src/data/aboutPage.json';
    
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

<style>
    @import '/css/main.css';
</style> 