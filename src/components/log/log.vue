<template xmlns:el-col="http://www.w3.org/1999/html">
     <div>
          <el-card>
               <div>
                    <el-button @click="subscribe">订阅多人消息</el-button>
               </div>
               <div>
                    <el-button @click="subscribeUser">点对点消息</el-button>
               </div>
               <div>
                    <el-row  :gutter="20">
                         <el-col :span="8">
                              <el-input type="textarea" v-model="toAll" clearable></el-input>
                         </el-col>
                         <el-col :span="4">
                              <el-button @click="sentTo">发送给所有人</el-button>
                         </el-col>

                    </el-row>
                    <el-row :gutter="20">
                         <el-col :span="8">
                              <el-input type="textarea" v-model="toUser" clearable></el-input>
                         </el-col>
                         <el-col :span="4">
                              <el-button @click="sentToUser">单点发送</el-button>
                         </el-col>

                    </el-row>

               </div>
               <div>
                    <h2>接收到的消息:</h2>
                    <p  v-for="item in msg">
                        {{item}}
                    </p>
               </div>
          </el-card>
     </div>
</template>

<script>
    export default {
        name: "log",
         data()
         {
               return {
                    toAll:"",
                    toUser:'',
                     msg:[]
               }
         },
         methods:{
             subscribe()
             {
                  this.$store.state.stompClient.subscribe("/topic/pull",(data)=>{
                       this.msg.push(data.body)
                  })
             },
              subscribeUser()
              {
                   this.$store.state.stompClient.subscribe("/user/queue/p2p",(data)=>{
                        this.msg.push(data.body)
                   })
              },
             sentTo()
             {
                 this.$store.state.stompClient.send(
                   "/app/pull",{},this.toAll
                 )
             },
              sentToUser()
              {
                   this.$store.state.stompClient.send(
                           "/app/p2p",{},this.toUser
                   )
              }
         },
         created() {

         }

    }
</script>

<style scoped>
    .el-row{
         margin-top: 20px;
    }
</style>
