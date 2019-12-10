import  vue from  "vue"
import  vuex from "vuex"

vue.use(vuex)

var  store=new vuex.Store({
          state:{
              userState:{},
              chartRows:[],
              stompClient:null,
          },

          mutations:{
              setUser(state,user)
              {
                   state.userState=user
                   sessionStorage.setItem('userState',JSON.stringify(user))
              },
              removeUser(state) {
                  state.userState = null
                  sessionStorage.removeItem('userState')
              },
              setChartRows(state,data)
              {
                  state.chartRows=data
              },
              setStompClient(state,stompClient)
              {
                  state.stompClient=stompClient
              }

          },
          getters:{
              getUserFormSessionStorage(state)
              {
                    state.userState=JSON.parse(sessionStorage.getItem('userState'))
                    return state.userState
              }
          }
})

export  default  store
