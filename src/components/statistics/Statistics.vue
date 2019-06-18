<template>
    <div class="statistic-wrapper">
        <app-back></app-back>
        <div class="statistic-wrapper-header">
            <div class="statistic-wrapper-header__title">Statistic</div>
            <div class="statistic-wrapper-header__icon"></div>
        </div>
        <div class="statistic-wrapper-months">
            <router-link
                class="statistic-wrapper-months__links"
                v-for="link in info"
                :to="{
                    path: '/statistics/' + link.month,
                    query: {
                        item: link
                        }
                }"
            >
                <a>{{link.month}}</a>
            </router-link>
        </div>
        <div class="statistic-wrapper-info" v-if="item">
            <div class="statistic-wrapper-info__income">&#43;${{item.income}}</div>
            <div class="statistic-wrapper-info__waste">-${{item.waste}}</div>
        </div>
        <div v-else>
            <p>Here i go again</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Back from '../Back.vue'

export default {
    components: {
        appBack: Back
    },
    data() {
        return {
            info: null,
            item: this.$route.query.item
        };
    },
    watch: {
        '$route'(to, from) {
            this.item = to.query.item;
        }
    },
    created() {
        axios
            .get('http://localhost:3000/statistics')
            .then(response => (this.info = response.data));
    },
    methods: {
    }
}
</script>

<style>
.statistic-wrapper-header {
    height: 65px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.statistic-wrapper-months__links {
    display: flex;
}
.statistic-wrapper-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: 28px;
    text-align: center;
 }
.statistic-wrapper-info__income {
    width: 40%;
    border: 1px solid #6956EC;
    border-radius: 3px;
    padding: 7px;
}
.statistic-wrapper-info__waste {
    width: 40%;
    border: 1px solid #FF2366;
    border-radius: 3px;
    padding: 7px;
}
</style>
