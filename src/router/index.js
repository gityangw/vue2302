import { createRouter , createWebHashHistory} from 'vue-router';
import HomePageVue from '@/views/HomePage.vue';
import NewsPageVue from '@/views/NewsPage.vue';
import AboutPageVue from '@/views/AboutPage.vue';
import NotFound from '@/views/NotFound.vue';
import LoginPageVue from '@/views/LoginPage.vue';
import { isLogin } from '@/utils'
import children from '@/views/HomeChildren.vue'
const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        name:'home',
        meta: {
            ani: 'slideLeft'
          },
        component: HomePageVue,
        children:[
          {
            path:'/home/children',
            component: children
          }
        ]
    },
    {
        path: '/news',
        meta:{
            needAuth: true,
            ani: 'slideRight'
        },
        name: 'news',

        component: NewsPageVue
    },
    {
        path: '/about/:id',
        name: 'about',
        meta: {
            ani: 'slideBottom'
          },
        component: AboutPageVue
      },
      {
        path: '/login',
        name: 'login',
        component: LoginPageVue
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