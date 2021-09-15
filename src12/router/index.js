import Vue from 'vue'
import VueRouter from 'vue-router'
import recommend from "../views/recommend.vue";  //同步路由加载
import guidePage from "../components/public/guidePage.vue";  //同步路由加载



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/recommend"
  },
  {
    path:"/guidePage",
    name:"guidePage",
    component:guidePage
  },
  {
    path:"/recommend",
    name:"recommend",
    // 添加路由元信息
    meta:{
        headerNav:true
    },
    component:recommend
  },
  {
    path:"/singer",
    name:"singer",
    meta:{
        headerNav:true
    },
    component:()=>import("../views/singer.vue")  //懒加载
  },
  {
    path:"/singer/singerlist",
    name:"singerlist",
    component:()=>import("../components/singer/singerlist.vue")  //懒加载
  },
  {
    path:"/rank",
    name:"rank",
    meta:{
        headerNav:true
    },
    component:()=>import("../views/rank.vue")
  },
  {
    path:"/rank/ranklist",
    name:"ranklist",
    component:()=>import("../components/rank/ranklist.vue")
  },
  {
    path:"/menun",
    name:"menun",
    component:()=>import("../views/menun.vue")
  },
  {
    path:"/search",
    name:"search",
    component:()=>import("../views/search.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
