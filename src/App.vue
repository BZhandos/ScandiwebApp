<template>
    <div class="app-wrap">
        <router-view class="main-content"></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>

import Footer from './components/Footer.vue'
    export default {
        components: {
            appFooter: Footer
        }
    }
</script>

<style>
.app-wrap{
    max-width: 375px;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    color: #FFF;
    background-color: #161823;
    font-family: 'Lato', sans-serif;
}
.main-content {
    height: 615px;
}
</style>
