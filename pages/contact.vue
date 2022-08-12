<template>
    <div>
        <Hero
            title="contact me"
            tagline="Lets have a chat sometime..."
            color="gold"
        />
        <InfoCard id="infoCard" color="gold"/>
        <Nav/>
    </div>
</template>

<script setup>
    useHead({
        title: 'Chris Rowe',
        meta: [
            { name: 'description', content: 'Contact Me.' }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        ]
    });

</script>

<style scoped>
    @import '/css/main.css';
</style> 