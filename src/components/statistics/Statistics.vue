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
                    v-for="value in statistics"
                    @click="getInPortionHandler(value)"
                    :class="{selectedBorder: selectedMonth === value.id}"
            >{{value.month}}</div>
        </div>

        <div    class="statistic-wrapper-chart"
                v-if="info">
            <div
                    v-for="(monthly,index) in info.waste" :key="index">
                {{sendDataToChartHandler(monthly, index)}}
            </div>
            <pie-chart :chart-data="chartData"></pie-chart>
        </div>




        <div class="statistic-wrapper-info" v-if="info">
            <div class="statistic-wrapper-info__income">&#43;${{info.income}}</div>
            <div class="statistic-wrapper-info__waste">-${{info.waste[0].spent + info.waste[1].spent + info.waste[2].spent}}</div>
        </div>
        <div v-else>
            <!--<p>Here i go again</p>-->
        </div>
    </div>
</template>


<script>
import Back from '../Back.vue'
import { dragscroll } from 'vue-dragscroll'
import PieChart from "./PieChart.js";

export default {
    directives: {
        'dragscroll': dragscroll
    },
    components: {
        appBack: Back,
        PieChart
    },
    data() {
        return {
            statistics: '',
            info: null,
            currentIncome: null,
            selectedMonth: 1,
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: "Data One",
                        // backgroundImage: "linear-gradient(#8D4DE8, #FF2366)",
                        data: []
                    }
                ]
            }
        };
    },
    created() {
        this.statistics= JSON.parse(localStorage.getItem('statistics'));
    },
    mounted() {
        // console.log (document.getElementById('doughnut-chart'));
            // this.gradient = document.getElementById('doughnut-chart').getContext("2d");
        //
        // this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);
        // this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
        // this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
        // this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
    },
    methods: {
        getInPortionHandler(data) {
            this.info = data;
            this.selectedMonth = data.id;
            this.chartData = {
                labels: ["Green", "Red", "Blue"],
                datasets: [
                    {
                        label: 'Data One',
                        // backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
                        // backgroundColor: [this.gradient, this.gradient, this.gradient],
                        // background: [ 'linear-gradient(#8D4DE8, #FF2366)', 'linear-gradient(#8D4DE8, #FF2366)', 'linear-gradient(#8D4DE8, #FF2366)'],
                        data: []
                    }
                ]
            }

        },
        sendDataToChartHandler(value, index){
          if (value != 0) {
            this.chartData.datasets[0].data[index] = value.spent;
            this.chartData.labels[index] = value.category;
          }
        }
    },
}
</script>

<style scoped lang="scss">
.statistic-wrapper {
    width: 375px;
    &-header {
         height: 85px;
         display: flex;
         flex-direction: row;
         flex-wrap: wrap;
         justify-content: center;
         align-items: center;
     }
    &-months {
        width: 100%;
        overflow: hidden;
        display: flex;
        background-color: #0E0F1A;
        &__name {
            padding: 15px 15px;
            border-bottom: 2px solid transparent;
            cursor: pointer;
        }
    }
    &-chart {
        margin: 0 auto;
        height: 300px;
        width: 300px;
    }
    &-info {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        font-size: 28px;
        text-align: center;
        padding-top: 20px;
        &__income {
            width: 40%;
            border: 1px solid #6956EC;
            border-radius: 3px;
            padding: 7px;
        }
        &__waste {
            width: 40%;
            border: 1px solid #FF2366;
            border-radius: 3px;
            padding: 7px;
        }
    }
}
.selectedBorder {
    border-bottom: 2px solid #0B78E3;
}
</style>
