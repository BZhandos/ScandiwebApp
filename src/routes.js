import Portfolio from './components/portfolio/Portfolio.vue'
import News from './components/news/News.vue'
import Statistics from './components/statistics/Statistics.vue'

export const routes = [
    { path: '/portfolio', component: Portfolio },
    { path: '/news', component: News },
    { path: '/statistics', component: Statistics },
    { path: '/statistics/:month', component: Statistics }
];
