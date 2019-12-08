import  Vue from 'vue'
import  axios  from  'axios'

// 是否允许跨域
axios.defaults.withCredentials=true;
axios.defaults.timeout=3000
axios.defaults.headers.post['Content-Type'] = 'application/json';


//请求拦截器
axios.interceptors.request.use(function (config) {
        //todo  请求之前要做的事
        console.log(config.url)
        config.headers.Authorization=sessionStorage.getItem('token')

        return config
    },function (error) {
        console.log(error)
    }
)
//响应拦截器
axios.interceptors.response.use(function (res) {
    console.log(res)

    return res
})

Vue.prototype.$http=axios
