<template>
    <div class="statistic-wrapper">
        <app-back></app-back>
        <div class="statistic-wrapper-header">
            <div class="statistic-wrapper-header__title">Statistic</div>
            <div class="statistic-wrapper-header__icon"></div>
        </div>
        <div class="statistic-wrapper-months"
             v-dragscroll
        >
            <div    class="statistic-wrapper-months__name"
                    v-for="link in statistics"
                    @click="selectedMonth=link.id"
                    :class="{selectedBorder: selectedMonth === link.id}"
            >{{link.month}}</div>
        </div>
        <div v-for="data in statistics">
            <div v-if="selectedMonth === data.id">
                <p>{{data.month}}</p>
                <p>{{data.income}}</p>
                <p>{{data.waste}}</p>
            </div>
        </div>
        <div class="statistic-wrapper-circle">
            <div class="statistic-wrapper-circle-inner">
                <div class="statistic-wrapper-circle__info"></div>
            </div>
        </div>





        <div class="statistic-wrapper-info" v-if="item">
            <div class="statistic-wrapper-info__income">&#43;${{item.income}}</div>
            <div class="statistic-wrapper-info__waste">-${{item.waste}}</div>
        </div>
        <div v-else>
            <!--<p>Here i go again</p>-->
        </div>
    </div>
</template>


<script>
import Back from '../Back.vue'
import { dragscroll } from 'vue-dragscroll'

export default {
    directives: {
        'dragscroll': dragscroll
    },
    components: {
        appBack: Back
    },
    data() {
        return {
            statistics: '',
            info: null,
            currentIncome: null,
            forFood: null,
            forOther: null,
            forClothe: null,
            selectedMonth: 1
        };
    },
    created() {
        this.statistics= JSON.parse(localStorage.getItem('statistics'));
    },
    methods: {
    }
}
</script>

<style>
.statistic-wrapper {
    width: 375px;
}
.statistic-wrapper-header {
    height: 85px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.statistic-wrapper-months {
    width: 100%;
    overflow: hidden;
    display: flex;
    background-color: #0E0F1A;
}
.statistic-wrapper-months__name {
    padding: 15px 15px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
}
.selectedBorder {
    border-bottom: 2px solid #0B78E3;
}
.statistic-wrapper-circle {

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
