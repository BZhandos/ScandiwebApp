<template>
    <div class="portfolio-wrapper">
        <portfolio-header/>
        <current-cash/>
    </div>

</template>

<script>
import axios from 'axios'
import PortfolioHeader from './PortfolioHeader.vue'
import CurrentCash from './CurrentCash.vue'

    export default {
        components: {
            PortfolioHeader,
            CurrentCash
        },
        mounted() {
            axios
                .get('http://localhost:3000/users')
                .then(response => {
                    localStorage.setItem('users', JSON.stringify(response.data))
                });
            axios
                .get('http://localhost:3000/statistics')
                .then(response => {
                    localStorage.setItem('statistics', JSON.stringify(response.data))
                });
        },
    }
</script>

<style scoped>
.portfolio-wrapper {
    margin: 0 auto;
    text-align: center;
    background-color: #6956EC;
    background-image: linear-gradient(#6956EC, #53B2BA);
}
</style>
