<template>
    <div>
        <el-card>
            <el-form :model="user"  :rules="rules"  :ref="user" title="登录" label-width="80px">
                <el-row>
                    <el-col :span="20">
                        <el-form-item label="用户名" prop="username">
                            <el-input type="text" v-model="user.username"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="20">
                        <el-form-item label="密码" prop="password">
                            <el-input type="password" v-model="user.password"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="16" :offset="4">
                        <el-button type="primary" @click="login">登录</el-button>
                    </el-col>
                </el-row>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                user: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'},
                        {min: 4, max: 10, message: '用户名的长度为4-10个字符'}
                    ],

                    password: [
                        {required: true, message: '密码不能为空', trigger: 'blur'},
                        {min: 4, max: 10, message: '密码的长度为4-10个字符'}
                    ]


                }
            }
        },
        methods:
            {
                login() {
                    this.$refs[this.user].validate((valid=>{
                         if (valid)
                         {
                             this.$store.commit('setUser',this.user)
                             this.$router.push({path: '/main'})
                         }else
                         {
                              this.$message({
                                  message:'请检查输入信息',
                                  type:"error"
                              })
                         }
                    }))

                }
            }
    }
</script>

<style scoped>

    .el-card {
        width: 40%;
        height: 400px;
        top: 20%;
        left: 30%;
        position: absolute;
        box-sizing: border-box;
        padding: 40px 0px 0 30px;

    }

    .el-button {
        margin-top: 10px;
        width: 100%;
    }
</style>
