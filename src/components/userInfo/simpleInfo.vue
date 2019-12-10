<template xmlns:el-col="http://www.w3.org/1999/html">
    <div>
        <el-container>
            <el-header>
                <h2>基本设置</h2>
            </el-header>
            <el-main>
                <el-form :model="infoData">
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <el-form-item label="邮箱">
                                <el-input type="email" v-model="infoData.email"></el-input>
                            </el-form-item>
                            <el-form-item label="昵称">
                                <el-input type="text" v-model="infoData.nickName"></el-input>
                            </el-form-item>
                            <el-form-item label="个人简介">
                                <el-input type="textarea" v-model="infoData.des"> </el-input>
                            </el-form-item>
                            <el-form-item label="国家/地区">
<!--                                <el-select  v-model="infoData.region" placeholder="请选择活动区域">-->
<!--                                    <el-option v-for="item in region" :label="item.label" :value="item.value">-->

<!--                                    </el-option>-->
<!--                                </el-select>-->
                                <el-cascader
                                        v-model="infoData.region"
                                        :options="region"
                                        :props="{ expandTrigger: 'hover' }"
                                         clearable=""></el-cascader>
                            </el-form-item>
                            <el-form-item label="手机号">
                                <el-input v-model="infoData.phone"></el-input>
                            </el-form-item>
                            <el-form-item >
                               <el-button type="primary">更新信息</el-button>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8" :offset="2">
                            <p>头像</p>
                            <el-avatar :src="imgSrc" :size="100">

                            </el-avatar>

                            <el-upload
                                    class="avatar-uploader"
                                    :show-file-list="false">
                                <el-button size="small" icon="el-icon-upload">点击上传</el-button>
                            </el-upload>
                        </el-col>
                    </el-row>
                </el-form>
            </el-main>
        </el-container>

    </div>
</template>

<script>
    export default {
        name: "simpleInfo",
        data() {
            return {
                imgSrc: require("@/images/r1.jpg"),
                region:[
                    {id:1,label:'中国',value:'China'
                     ,children:[
                            {id:3,label:'湖北省',value:'hubei',children:[
                                    {id:4,label:'黄冈市',value:'huanggang'},
                                    {id:5,label:"武汉市",value:'wuhan'}
                                ]},
                            {id:6,label:'安徽省',value:'安徽',children:[
                                    {id:7,label:'合肥市',value:'hefei'},
                                    {id:8,label:"六安市",value:'wliuan'}
                                ]}
                        ]},
                    {id:2,label:'美国',value:'USA'}
                ],
                infoData:{
                    email:'',
                    nickName:'',
                    des:'',
                    region:'',
                    phone:''
                }
            }
        }
    }
</script>

<style scoped>

</style>
