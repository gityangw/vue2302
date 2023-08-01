import { createRouter , createWebHashHistory} from 'vue-router';
import HomePageVue from '@/views/HomePage.vue';
import NewsPageVue from '@/views/NewsPage.vue';
import AboutPageVue from '@/views/AboutPage.vue';
const routes = [
    {
        path: '/',
        component: HomePageVue
    },
    {
        path:'/news',
        component: NewsPageVue
    },
    {
        path:'/about',
        component: AboutPageVue
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router