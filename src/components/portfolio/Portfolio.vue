<template>
    <div class="portfolio_wrapper">
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
        },
    }
</script>

<style scoped>
.portfolio_wrapper {
    margin: 0 auto;
    text-align: center;
    background-color: #6956EC;
    background-image: linear-gradient(#6956EC, #53B2BA);
}
</style>
