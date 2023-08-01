import { createRouter , createWebHashHistory} from 'vue-router';
import HomePageVue from '@/views/HomePage.vue';
import NewsPageVue from '@/views/NewsPage.vue';
import AboutPageVue from '@/views/AboutPage.vue';
import NotFound from '@/views/NotFound.vue';
import NativeNews from '@/views/NativeNews.vue'
import AbroadNews from '@/views/AbroadNews.vue'
const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path: '/home',
        component: HomePageVue
    },
    {
        path:'/news',
        component: NewsPageVue,
        children: [
        {
            path: '/news',
            redirect: 'news/native'
        },
        {
            path:'/news/native',
            component: NativeNews
        },
        {
            path: '/news/abroad',
            component: AbroadNews
        }
           
        ],
       
    },
    {
        path:'/about',
        component: AboutPageVue
    },
    {
        path:'/:pathMatch(.*)*',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router