<template>
    <div>
        <el-container>
            <el-header>
                <h2>安全设置</h2>
            </el-header>
            <el-main>
                <div class="info-block" v-for="item in securityData">
                    <div class="info">
                        <h4>{{item.title}}</h4>
                        <p>{{item.key}}
                            <span v-if="item.value!=''">:{{item.value}}</span>
                        </p>
                    </div>
                    <div class="operation">
                       <span>修改</span>
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "securityInfo",
        data(){
            return {
                securityData:[
                    {title:'账户密码',key:'当前密码强度',value:'高'},
                    {title:'密保手机',key:'已绑定手机',value:'15334178347'},
                    {title:'密保问题',key:'未设置密保问题',value:''},
                    {title:'备用邮箱',key:'已绑定邮箱',value:'1234567@163.com'}
                ]
            }
        }

    }
</script>

<style scoped>
    .info-block
    {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        align-items: center;
    }

    .info  p
    {
        color:#666;
    }

    .operation span
    {
        color: dodgerblue;
    }
</style>
