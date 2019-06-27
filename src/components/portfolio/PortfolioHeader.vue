<template>
    <div class="profile" v-if="users">

        <div class="profile-info">
            <div class="profile-info__name">{{ users[0].name }}</div>
            <div class="profile-info__bio">{{users[0].bio}}</div>
        </div>
        <div class="profile-picture"
             v-on:click="ShowCoindeskHandler()"
        >
            <img class="profile-picture__image" :src="imgSrc + users[0].image" />
        </div>
        <transition name="fade">
            <div v-show="showDialog"
                 class="profile-desk"
            >
                <template v-if="getInfo">
                    <div>Bitcoin rate</div>
                    <div
                            v-for="currency in coindeskInfo">
                        {{ currency.code }}:
                        <span>
                            <span v-html="currency.symbol"></span>
                            {{ currency.rate_float.toFixed(2) }}
                        </span>
                    </div>
                </template>
                <template v-else>
                    <div>
                        Hope it is good weather outside! Have a great Day!
                    </div>
                </template>
            </div>
        </transition>
    </div>
</template>

<script>
import axios from 'axios'

export default {
        data() {
            return {
                users: JSON.parse(localStorage.getItem('users')),
                imgSrc: 'src/assets/',
                showDialog: false,
                coindeskInfo: null,
                getInfo: false
            }
        },

        methods: {
            ShowCoindeskHandler() {
                this.showDialog = true;
                axios
                    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                    .then(response => {
                    this.getInfo=true;
                    this.coindeskInfo = response.data.bpi
                    })
                .catch(error => {this.getInfo = false});
                setTimeout(() => this.showDialog=false, 2000);
            }
        }
}
</script>

<style scoped lang="scss">

.profile {
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: #0E0F1A;
    background-image: linear-gradient(#0E0F1A, #161823);
    &-info {
        display: flex;
        flex-direction: column;
        padding-left: 5%;
        &__name{
            font-size: 18px;
            font-style: italic;
        }
        &__bio {
            font-size: 14px;
        }
    }
    &-picture {
        &__image {
            height: 50px;
            border-radius: 50%;
            border: 1px solid seashell;
            &:hover {
                border: 1px solid cornflowerblue;
                transition: 1s;
                cursor: pointer;
            }
        }
    }
    &-desk {
        position: absolute;
        width: 100px;
        background-color: #6956EC;
        background-image: linear-gradient(#6956EC, #53B2BA);
        box-shadow: 0 0 10px #085fb5;
        font-size: 12px;
        padding: 5px;
        border-radius: 2px;
        top: 15px;
        left: 55%;
        z-index: 10;
    }
}
.fade-enter {
    opacity: 0;
}
.fade-enter-active{
    transition: opacity 0.7s;
}
.fade-leave {
}
.fade-leave-active {
    transition: opacity 0.5s;
    opacity: 0;
}
</style>
