import { createRouter , createWebHistory} from 'vue-router';
import HomePageVue from '@/views/HomePage.vue';
import NewsPageVue from '@/views/NewsPage.vue';
import AboutPageVue from '@/views/AboutPage.vue';
import NotFound from '@/views/NotFound.vue';
import LoginPageVue from '@/views/LoginPage.vue';
import { isLogin } from '@/utils'
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
        meta:{
            needAuth: true,
        },
        name: 'news',
        component: NewsPageVue
    },
    {
        path: '/about',
        name: 'about',
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
    history: createWebHistory(),
    routes
})
//写法一
// router.beforeEach((to,from,next)=>{
//     // const passRoutes = ['/login','/register']
//     if(to.meta.needAuth){
//         if(isLogin()){
//             next()
//         }else{
//             next({
//                 path: '/login',
//                 query:{
//                     from: to.path
//                 }
//             })
//         }
//     }else{
//         next()
//     }
// })



//写法二
router.beforeEach((to,from)=>{
if(to.meta.needAuth){
    if(!isLogin()){
        return {
            path: '/login', 
            query: {
                from: to.path
            }
        }
    }
}
})
export default router