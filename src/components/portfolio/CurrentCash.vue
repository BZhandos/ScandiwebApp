<template>
    <div class="current_cash">
        <div class="current_cash_header">In my pocket:</div>
        <div class="current_cash_header">${{users[0].currentAmout}}</div>
        <button
                v-on:click="inputFieldViseable=true"
                class="current_cash__button"
        >
            Add money</button>

        <button
                v-on:click="sendFieldViseable=true"
                class="current_cash__button"
        >
            Spend money</button>
        <transition name="slide"> /* adding money block*/
            <div class="current_cash_addingBox"
                 v-if="inputFieldViseable"
            >
                <input
                        class="current_cash_addingBox__input"
                        type="text"
                        v-model="money"
                />
                <button
                        class="current_cash_addingBox__button"
                        v-on:click="AddBudgetHandler()">ADD</button>
            </div>
        </transition>
        <transition name="fade"> /* spending money block*/
            <div class="current_cash_addingBox"
                 v-if="sendFieldViseable">
                <input
                        class="current_cash_addingBox__input"
                        type="text"
                        v-model="money"
                />
                <div class="current_cash_addingBox_checkboxes">
                    <input type="radio" id="one" value="Food" checked="checked"
                           v-model="picked">
                    <label class="current_cash_addingBox_checkboxes__label"
                            for="one" >
                        <img src="../../assets/foods.png"/>
                    </label>
                    <input type="radio" id="two" value="Clothes" v-model="picked">
                    <label class="current_cash_addingBox_checkboxes__label"
                           for="two" >
                        <img src="../../assets/clothes.png"/>
                    </label>
                    <input type="radio" id="three" value="Other" v-model="picked">
                    <label class="current_cash_addingBox_checkboxes__label"
                           for="three" >
                        <img src="../../assets/other.png"/>
                    </label>
                </div>
                <button
                        class="current_cash_addingBox__button"
                        v-on:click="SpendBudgetHandler()">SPEND</button>
            </div>
        </transition>
        <div class="current_cash_millioner">
            <div class="current_cash_millioner_info">
                <p v-if="toBeMillioner<100">You are {{toBeMillioner}}% millioner</p>
                <p v-else>You are Millioner <span style="font-size: 12px;">(in KZT currency)</span></p>
            </div>
            <transition>
                <div class="current_cash_millioner_info__fill"
                     v-bind:style="{width: toBeMillioner + '%'}">
                </div>
            </transition>
        </div>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                users: JSON.parse(localStorage.getItem('users')),
                inputFieldViseable: false,
                sendFieldViseable: false,
                money: 0,
                toBeMillioner: 0,
                picked: "Food",
            }
        },
        mounted() {
            this.BeingMillionerHandler();
        },
        methods: {
            AddBudgetHandler() {
                this.inputFieldViseable= false;
                this.users[0].currentAmout = (parseFloat(this.users[0].currentAmout) +  parseFloat(this.money)).toFixed(2);
                localStorage.setItem('users', JSON.stringify(this.users));
                this.BeingMillionerHandler();
            },
            SpendBudgetHandler() {
                this.sendFieldViseable= false;
                this.users[0].currentAmout = (parseFloat(this.users[0].currentAmout) -  parseFloat(this.money)).toFixed(2);
                localStorage.setItem('users', JSON.stringify(this.users));
                this.BeingMillionerHandler();
            },
            BeingMillionerHandler() {
                this.toBeMillioner = (parseFloat(this.users[0].currentAmout) * 100 / 2591).toFixed(2);
                if (this.toBeMillioner > 100) this.toBeMillioner=100;
            }
        }
    }
</script>

<style scoped>
.current_cash {
    position: relative;
}
.current_cash__button {
    background-color: #0E0F1A;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
.current_cash__button:hover, .current_cash__button:active {
    background-color: #161823;
    color: #FF2366;
}
.current_cash_addingBox {
    position: absolute;
    background-color: #161823;
    width: 80%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 40px;
    box-shadow: 0 0 10px #085fb5;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 4px;
    z-index: 10;
}
.current_cash_addingBox__input {
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    outline: none;
}
.current_cash_addingBox__button {
    background-color: #8D4DE8;
    background-image: linear-gradient(#8D4DE8, #FF2366);
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
.current_cash_addingBox__button:hover, .current_cash_addingBox__button:active {
    background-image: linear-gradient(#FF2366, #8D4DE8);
    outline: none;
}
.current_cash_addingBox_checkboxes {
    display: flex;
}
.current_cash_addingBox_checkboxes__label {
    cursor:pointer;
    -webkit-transition: all 100ms ease-in;
    -moz-transition: all 100ms ease-in;
    transition: all 100ms ease-in;
    -webkit-filter: brightness(1.8) grayscale(1) opacity(.7);
    -moz-filter: brightness(1.8) grayscale(1) opacity(.7);
    filter: brightness(1.8) grayscale(1) opacity(.7);
}
.current_cash_addingBox_checkboxes__label:hover {
    -webkit-filter: brightness(1.2) grayscale(.5) opacity(.9);
    -moz-filter: brightness(1.2) grayscale(.5) opacity(.9);
    filter: brightness(1.2) grayscale(.5) opacity(.9);
}
.current_cash_addingBox_checkboxes__label img{
    height: 60px;
    width: 80px;
}
.current_cash_addingBox_checkboxes input{
    visibility: hidden;
}

.current_cash_addingBox_checkboxes input[type=radio]:checked + label {
    opacity: .9;
}
.current_cash_addingBox_checkboxes input[type=radio]:checked + label{
    -webkit-filter: none;
    -moz-filter: none;
    filter: none;
}
.current_cash_millioner {
    position: relative;
    width: 90%;
    margin: auto;
    background-color: #fff;
    height: 40px;
}
.current_cash_millioner_info {
    position: absolute;
    left: 0;
    right: 0;
    color: #161823;
}
.current_cash_millioner_info__fill {
    background-color: #00FF00;
    background-image: linear-gradient(to right, #ADFF2F, #00FF00);
    height: 40px;
}

    .slide-enter{

    }
    .slide-enter-active {
        animation: slide-in 0.5s ease-out forwards;
    }
    .slide-leave {

    }
    .slide-leave-active {
        animation: slide-out 0.5s ease-out forwards;
    }
    @keyframes slide-in {
        from {
            transform: translateY(-20px);
        }
        to {
            transform: translateY(0);
        }
    }
    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
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
