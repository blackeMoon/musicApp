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
    path:'/login',
    name:"login",
    component:()=>import("../components/base/login.vue")
  },
  {
    path:'/userInfo',
    name:"userInfo",
    component:()=>import("../views/userInfo.vue"),
    // 独享路由守卫
    // beforeEnter: (to, from, next) => {
    //   let login = window.localStorage.getItem("login");
    //   // 判断登录情况
    //   if(!login){
    //     next("/login");
    //     return 
    //   }else{
    //     next();
    //   }
    // }
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
    // MV 视频 
  {
    path:"/newmv",
    name:"newmv",
    meta:{
        headerNav:true,
        // player:false
    },
    component:()=>import("../views/newmv.vue")
  },

  // 搜索
  {
    path:"/search",
    name:"search",
    component:()=>import("../components/search/search.vue")
  },
  {
    path:"/search/searchlist",
    name:"searchlist",
    component:()=>import("../components/search/searchlist.vue")
  },
  {
    path:"/pinglun/pinglundata",
    name:"pinglundata",
    component:()=>import("../components/pinglun/pinglundata.vue")
  },
  {
    path:"/song/songlist",
    name:"songlist",
    component:()=>import("../components/song/songlist.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to,from,next)=>{
//   let login = window.localStorage.getItem("login");
//   // 登录界面
//   if(to.path == "/login"){
//     next();
//     return;
//   }else{
//     // 判断登录情况
//     if(!login){
//       next("/login");
//       return;
//     }else{
//       next();
//     }
//   }
// })

export default router
