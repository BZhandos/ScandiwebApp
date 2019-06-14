<template>
    <div class="footer-wrapper">
        <router-link to="/portfolio"><a>portfolio</a></router-link>
        <router-link to="/news"><a>news</a></router-link>
        <router-link to="/statistics"><a>statistics</a></router-link>
    </div>
</template>

<style scoped>
.footer-wrapper {
    background-color: #0E0F1A;
    color: #FFF;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-top: 1px solid #778899;
}
</style>
