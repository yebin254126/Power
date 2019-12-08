import  vueRouter from  "vue-router"
import  vue from  'vue'
import  loginCom from  "../components/login.vue"
import  mainCom  from  "../components/main.vue"
import  welCom   from   "../components/welcome"
import  userCom  from "../components/user/userList"
import  chartCom from   "../components/chart/mychart"
import  rightCom from   "../components/rights/rights"
import  roleCom  from   "../components/roles/roles"
import  userInfoCom from  "../components/userInfo/userInfo"
import  logCom   from  "../components/log/log"
vue.use(vueRouter)
var  router=new vueRouter({
     routes:[
         {path:'/',name:'index',redirect:"/login"},
         {path:'/login',name:'login',component:loginCom},
         {path:'/main',name:'main',component: mainCom,
             redirect:'/welcome',
            children:[
                {path:'/monitor',name:'monitor',component:chartCom},
                {path:'/welcome',name:'welcome',component:welCom},
                {path:'/userList',name:'userList',component:userCom},
                {path:'/rights',name:'rights',component:rightCom},
                {path:'/roles',name:'roles',component:roleCom},
                {path:'/userInfo',name:'userInfo',component:userInfoCom},
                {path:'/log',name:'log',component:logCom}
            ]
         }
     ]
})

//路由守卫
router.beforeEach((to,from,next) =>{
        //处理拦截路由逻辑
         if (to.path=="/login")
          return next()
         else
         {
             if (sessionStorage.getItem('userState')==null)
             {
                 return  next({path:'/'})
             }else
             {
                 return  next()
             }
         }
})

export  default  router
