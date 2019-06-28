import Portfolio from './components/portfolio/Portfolio.vue'
import News from './components/news/News.vue'
import Statistics from './components/statistics/Statistics.vue'
import Bookmark from './components/bookmark/Bookmark.vue'

export const routes = [
    { path: '', component: Portfolio },
    { path: '/portfolio', component: Portfolio },
    { path: '/news', component: News },
    { path: '/statistics', component: Statistics },
    { path: '/bookmark', component: Bookmark },
];
