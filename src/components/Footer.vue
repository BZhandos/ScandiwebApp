<template>
    <div class="footer-wrapper">
        <router-link active-class="footer-wrapper-active" to="/portfolio">
            <img class="footer-wrapper-icon" src="../assets/footer/1.png"  /></router-link>
        <router-link active-class="footer-wrapper-active" to="/news">
            <img class="footer-wrapper-icon" src="../assets/footer/2.png"  /></router-link>
        <router-link active-class="footer-wrapper-active" to="/notifications">
            <img class="footer-wrapper-icon" src="../assets/footer/3.png"  /></router-link>
        <router-link active-class="footer-wrapper-active" to="/bookmark">
            <img class="footer-wrapper-icon" src="../assets/footer/4.png"  /></router-link>
        <router-link active-class="footer-wrapper-active" to="/statistics">
            <img class="footer-wrapper-icon" src="../assets/footer/5.png"  /></router-link>
    </div>
</template>

<style scoped lang="scss">
.footer-wrapper {
    background-color: #0E0F1A;
    color: #FFF;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-top: 1px solid #778899;
    padding: 15px 0;
    &-active img{
        -webkit-filter: none;
        -moz-filter: none;
        filter: none;
    }
    &-icon {
        -webkit-filter: brightness(1.8) grayscale(1) opacity(.2);
        -moz-filter: brightness(1.8) grayscale(1) opacity(.2);
        filter: brightness(1.8) grayscale(1) opacity(.2);
    }
}
</style>
