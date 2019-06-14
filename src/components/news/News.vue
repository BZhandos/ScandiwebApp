<template>
    <div class="news-wrap">
        <app-back></app-back>
        <app-post></app-post>
        <app-post></app-post>
    </div>
</template>

<script>
import Post from './Post.vue'
import Back from '../Back.vue'

export default {
    components: {
        appPost: Post,
        appBack: Back
    }
}
</script>

<style scoped>
.news-wrap {
    overflow: auto;
    right: 170px;
    height: 615px;
}
</style>
