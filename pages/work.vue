<template>
    <div>
        <Hero
            title="my work"
            tagline="Here are some of the projects I have worked on..."
            color="pink"
        />
        <InfoCard id="infoCard" color="pink"/>
        <Nav/>
    </div>
</template>

<script setup>
    useHead({
        title: 'Chris Rowe',
        meta: [
            { name: 'description', content: 'My portfolio.' }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        ]
    })
</script>

<style scoped>
    @import '/css/main.css';
</style> 