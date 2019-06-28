<template>
    <div class="game-wrapper">
        <div class="game-wrapper-field">
            <div    v-if="visable"
                    class="game-wrapper-coins">
                <transition name="slideToRight">
                    <img

                            width="60px" height="60px" src="../../assets/heads.png"/>
                </transition>
                <button class="game-wrapper__start"
                        @click="HeadsAndTails()"
                >here we go</button>
                <transition name="slideToLeft">
                    <img

                            width="60px" height="60px" src="../../assets/tails.png"/>
                </transition>
            </div>
            <div    v-if="animate"
                    class="game-wrapper-flip"
                    v-bind:style="{transform: transform}">
                <div class="game-wrapper-flip__font"><img width="60px" height="60px" src="../../assets/heads.png"/></div>
                <div class="game-wrapper-flip__back"
                     v-bind:style="{transform: transformBack}"
                ><img width="60px" height="60px" src="../../assets/tails.png"/></div>
            </div>
        </div>
        <div
        @click="PlayAgainHandler()">
            again
        </div>


    </div>
</template>
<script>
    export default {
        data() {
          return {
                transform:  "",
                visable: true,
                animate: false
          }
        },
        methods: {
            HeadsAndTails() {
                this.visable = false;
                this.animate = true;
                let max=5;
                for(let i=1; i<=max; i++){
                    setTimeout(() => this.shootHandler(max, i), i*1000);
                }
            },
            shootHandler(max, i) {
                this.transform = "rotateY(180deg)";
                setTimeout(() =>   this.transform = "", i*1000);
                if (i===6) {
                    setTimeout(() =>   this.transform = "rotateY(180deg)", (i)*1000);
                }
            },
            PlayAgainHandler() {
                this.visable = true;
                this.animate = false;
            }
        }
    }
</script>

<style scoped lang="scss">
.game-wrapper {
    &-field {
        background-color: #0E0F1A;
        height: 80px;
    }
    &-coins {
        padding: 10px 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    &-flip {
        padding: 10px 0;
        position: relative;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        &__font {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
        }
        &__back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            transform: rotateY(180deg);
        }
    }
}

    .slideToRight-leave-active {
        animation: slideToRight 0.5s ease-out forwards;
    }
    @keyframes slideToRight {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateX(30px);
        }
    }
    .slideToLeft-leave-active {
        animation: slideToLeft 0.5s ease-out forwards;
    }
    @keyframes slideToLeft {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateX(-30px);
        }
    }
</style>
