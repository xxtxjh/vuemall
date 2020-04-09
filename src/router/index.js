import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/home/Home.vue')
const Category= () => import('views/category/Category.vue')
const Card = () => import('views/cart/Cart.vue')
const Profile = () => import('views/profile/Profile.vue')
const Detail = () => import('views/detail/Detail.vue')
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
   redirect:'home'
  },
  {
    path: '/home',
    name: 'home',
    meta:{
    title:'首页'
    },
    component: Home,
  },
  {
    path: '/category',
    name: 'category',
    meta:{
      title:'分类'
      },
    component:Category,
  },
  {
    path: '/cart',
    name: 'cart',
    meta:{
      title:'购物街'
      },
    component:Card,
  },
  {
    path: '/profile',
    name: 'profile',
    meta:{
      title:'我的'
      },
    component:Profile,
  },
  {
    path: '/detail/:iid',
    name: 'detail',
    meta:{
      title:'详情页'
      },
    component:Detail,
  }
  
]
const router = new VueRouter({
  routes
})
router.afterEach((to,from)=>{
  document.title=to.matched[0].meta.title
  
 })
export default router
