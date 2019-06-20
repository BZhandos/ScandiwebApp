import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import {routes} from "./routes";
import VueCharts from 'vue-chartjs'
import { Bar, Line } from 'vue-chartjs'

Vue.use(VueRouter);
Vue.use(VueCharts);


const router = new VueRouter({
  mode: 'history',
  routes
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
