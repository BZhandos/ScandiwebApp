<template>
    <div class="current_cash">
        <div class="current_cash_header">In my pocket:</div>
        <div class="current_cash_header">${{users[0].currentAmout}}</div>
        <button
                v-on:click="inputFieldViseable=true"
                class="current_cash_box__button"
        >
            Add some money</button>
        <transition name="slide">
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
        <div style="background-color:#fff; height: 15px;">
            <div v-bind:style="{width: toBeMillioner + '%'}"
                    style="background-color:green; height: 15px;">
            </div>
        </div>
    </div>

</template>
<script>
import axios from 'axios'
    export default {
        data() {
            return {
                users: JSON.parse(localStorage.getItem('users')),
                inputFieldViseable: false,
                money: 0,
                toBeMillioner: 0
            }
        },
        methods: {
            AddBudgetHandler() {
                this.inputFieldViseable= false;
                this.users[0].currentAmout = parseFloat(this.users[0].currentAmout) +  parseFloat(this.money);
                localStorage.setItem('users', JSON.stringify(this.users));
                this.toBeMillioner = parseFloat(this.users[0].currentAmout) / 10000;
                if (this.toBeMillioner > 100) this.toBeMillioner=100;
            }
        }
    }
</script>

<style scoped>
.current_cash {
    position: relative;
}
.current_cash_box__button {
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
.current_cash_box__button:hover, .current_cash_box__button:active {
    background-color: #161823;
    color: #FF2366;
}
.current_cash_addingBox {
    position: absolute;
    background-color: #161823;
    width: 70%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    height: 120px;
    top: 39px;
    box-shadow: 0 0 10px #085fb5;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 4px;
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
</style>
