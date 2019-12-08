import  Vue from  "vue"
import  app from  "./app.vue"
import  router from  "./js/router.js"
import  store  from  "./js/store.js"
import  echarts from "echarts"
import  elementUI from  'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import  './js/axios'
Vue.prototype.$echarts=echarts
Vue.use(elementUI)
var vm= new Vue({
     el:'#app',
    router,
    store,
    render:h=>{
        return h(app)
    }

})
