import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins;

export default {
    data() {
      return {
          gradient: null
      }
    },
    extends: Doughnut,
    mixins: [reactiveProp],
    props: ['options'],
    mounted () {
        // this.chartData is created in the mixin.
        // If you want to pass options please create a local options object
        this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);
        this.gradient.addColorStop(0, 'rgba(141,77,232, 0.5)');
        this.gradient.addColorStop(0.5, 'rgba(141,77,232, 0.25)');
        this.gradient.addColorStop(1, 'rgba(255,35,102, 0)');
        this.chartData.datasets[0].backgroundColor= [ this.gradient,  this.gradient,  this.gradient];
        this.renderChart(this.chartData, this.options)
    }
}
