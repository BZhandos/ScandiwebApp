<template>
        <div class="arrow-wrapper"
             @click="goBackHandler()">
            <transition name="slidingOut">
                <img    v-if="visable"
                        class="arrow-wrapper_circle" src="../assets/arrow-back.png" />
            </transition>
        </div>
</template>
<script>
    export default {
        data() {
            return {
                visable: true
            }
        },
        methods: {
            goBackHandler() {
                this.visable=false;
                window.setTimeout(() => {
                    this.$router.push('/portfolio');
                }, 400)
            }
        }
    }
</script>
<style scoped>
.arrow-wrapper {
    position: absolute;
    z-index: 1;
    top: 30px;
    padding-left: 10px;
    cursor: pointer;
}
.arrow-wrapper_circle {
    fill: red;
}
.slidingOut-leave-active {
    animation: slidingOut 0.5s ease-out forwards;
}
@keyframes slidingOut {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateX(-50px);
    }
}
</style>
