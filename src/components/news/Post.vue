<template>

    <div class="post-wrap">
        <div class="post-wrap-content"
             :style="{ backgroundImage: 'url(' + image + ')' }">
            <div class="post-wrap-content__comment">
                <div class="post-wrap-content__title">Who are you and
                    why you’re
                    standing here?</div>
                 <div class="post-wrap-content__desc">It doesn't matter if you're building the next Facebook, or if you're the director of marketing for an industrial company.
                 </div>
            </div>
        </div>
        <div class="post-wrap-info">
            <div class="post-wrap-info__author">By Baz Jan</div>
            <div class="post-wrap-info__day">28 April</div>
        </div>
        <div class="post-wrap-likes">
            <div class="post-wrap-likes__icons"></div>
            <div class="post-wrap-likes__amount">+76</div>
            <div class="post-wrap-likes__text">Liked this</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                //image: "https://i.pinimg.com/originals/b7/91/4f/b7914f3b0d7c481e7548be504a3829cc.jpg"
                image: "/src/assets/news.png"
            }
        }
    }
</script>

<style scoped>
.post-wrap {

}
.post-wrap-content {
    position: relative;
    background-repeat: no-repeat;
    width: 375px;
    height: 505px;
}
.post-wrap-content__comment {
    position: absolute;
    top: 50%;
    margin: 0 15px;
    border-bottom: 1px solid #ccc;
}
.post-wrap-content__title {
    font-size: 40px;
}
.post-wrap-content__desc {
    font-size: 18px;
    margin-bottom: 20px;
}
.post-wrap-info {
    padding: 0 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 16px;
    line-height: 40px;
}
.post-wrap-likes {
    padding: 0 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    font-size: 14px;
    line-height: 20px;
}
.post-wrap-likes__amount {
    background-color: #FD51D9;
    padding: 0 4px;
    border-radius: 10px;
}
</style>
