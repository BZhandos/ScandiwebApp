<template>
    <div class="arrow-wrapper">
        <router-link to="/portfolio">
            <img class="arrow-wrapper_circle" src="../assets/arrow-back.png" />
            <p> {{item}}</p>
        </router-link>
    </div>
</template>

<style scoped>
.arrow-wrapper {
    position: absolute;
    z-index: 1;
    top: 30px;
    padding-left: 10px;
}
.arrow-wrapper_circle {
    fill: red;
}
</style>
