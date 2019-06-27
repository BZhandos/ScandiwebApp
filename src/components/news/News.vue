<template>
    <div class="news-wrap"  v-dragscroll>
        <app-back></app-back>
        <app-post></app-post>
        <app-post></app-post>
    </div>
</template>

<script>
import Post from './Post.vue'
import Back from '../Back.vue'
import { dragscroll } from 'vue-dragscroll'

export default {
    directives: {
        'dragscroll': dragscroll
    },
    components: {
        appPost: Post,
        appBack: Back
    }
}
</script>

<style scoped>
.news-wrap {
    width: 100%;
    overflow: auto;
    padding-right: 20px;
    right: 170px;
    height: 615px;
    cursor: grab;
}
</style>
