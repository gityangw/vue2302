import { createRouter , createWebHashHistory} from 'vue-router';
import HomePageVue from '@/views/HomePage.vue';
import NewsPageVue from '@/views/NewsPage.vue';
import AboutPageVue from '@/views/AboutPage.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        name:'home',
        component: HomePageVue
    },
    {
        path: '/news',
        name: 'news',
        component: NewsPageVue
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPageVue
      },
      {
        path: '/:pathMatch(.*)*',
        component: NotFound
      }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router