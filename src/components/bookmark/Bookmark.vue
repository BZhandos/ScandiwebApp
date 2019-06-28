<template>
    <div class="bookmark-wrap">
        <app-back></app-back>
        <div class="bookmark-wrap-header">
            <div class="bookmark-wrap-header__title">
                Test your might
            </div>
        </div>
        <play-game></play-game>
    </div>
</template>
<script>
import Back from '../Back.vue'
import PlayGame from "./Game.vue";
    export  default  {
        components: {
            appBack: Back,
            PlayGame,

        },
    }
</script>
<style lang="scss" scoped>
.bookmark-wrap {
    height: 615px;
    &-header {
         height: 85px;
        &__title{
            text-align: center;
            vertical-align: middle;
            line-height: 85px;
        }
    }
}
</style>
