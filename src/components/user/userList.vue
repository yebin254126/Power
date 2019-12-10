<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
            </el-breadcrumb>

        <el-card>
            <el-row>
                <el-col :span="8">
                    <el-input placholder="请输入关键字" v-model="queryInfo.param"  clearable="">
                        <el-button slot="append" icon="el-icon-search" @click="queryUser"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="6" :offset="2">
                    <el-button type="primary" @click="addDiaVisible=true" >添加用户</el-button>
                </el-col>
            </el-row>
            <el-table :data="tableData" border stripe>
                <el-table-column label="用户名" prop="name"></el-table-column>
                <el-table-column label="手机号" prop="phone"></el-table-column>
                <el-table-column label="状态" prop="status">
                    <template slot-scope="scope">
                        <el-switch
                                v-model="scope.row.status"
                                active-color="#13ce66"
                                inactive-color="#ff4949">
                        </el-switch>

                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" size="mini" icon="el-icon-edit" @click="queryUserById(scope.row.id)">编辑</el-button>
                        <el-button type="danger" size="mini" icon="el-icon-delete" @click="deleteUser(scope.row.id)">删除</el-button>
                        <el-button type="success" size="mini" icon="el-icon-setting">分配角色</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    :current-page="queryInfo.pageNum"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :page-sizes="[2, 5, 10]"
                    :page-size="queryInfo.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="30">
            </el-pagination>
        </el-card>
        <el-dialog
                title="添加用户"
                :visible.sync="addDiaVisible"
                 width="30%"
                :before-close="handleClose">
<!--                <span>这是一段信息</span>-->
                <el-form label-width="80px"  :model="addForm" :ref="addForm" :rules="addFormRule">
                    <el-form-item  label="用户名" prop="username">
                        <el-input  v-model="addForm.username"></el-input>
                    </el-form-item>
                    <el-form-item  label="密码" prop="password">
                        <el-input  v-model="addForm.password"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号" prop="phone">
                        <el-input   v-model="addForm.phone"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                <el-button @click="addDiaVisible = false">取 消</el-button>
                <el-button type="primary" @click="addUser">确 定</el-button>
                </span>
        </el-dialog>

        <el-dialog
        title="修改用户信息"
        :visible.sync="editDiaVisible"
        width="30%">
            <el-form label-width="80px">
                <el-form-item label="用户名">
                    <el-input></el-input>
                </el-form-item >
                <el-form-item label="密码">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editDiaVisible = false">取 消</el-button>
                <el-button type="primary" @click="editUser">确 定</el-button>
                </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "userCom",
        data() {
            //自定义校验规则
            var  checkUsername=(rule,value,callback)=>{
                console.log(value)
            }
            var checkPhone=(rule,value,callback)=>{
                    var regex=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
                    if (regex.test(value))
                        //校验成功时的回调
                        return callback()
                     else
                    {
                        //失败后的回调
                        return  callback(new Error('手机号不合法'))
                    }

            }
            return {
                queryInfo: {
                    param: '',
                    pageNum: 1,
                    pageSize: 5,
                },
                total: 30,
                tableData: [
                    {id: 1, name: 'yebin', phone: 15334178347, status: true},
                    {id: 2, name: 'yebin', phone: 15334178347, status: true},
                    {id: 3, name: 'yebin', phone: 15334178347, status: true},
                    {id: 4, name: 'yebin', phone: 15334178347, status: true},
                    {id: 5, name: 'yebin', phone: 15334178347, status: true},

                ],
                roles:[

                ],
                addDiaVisible:false,
                editDiaVisible:false,
                addForm:{
                    username:'',
                    password:'',
                    phone:'',
                },
                addFormRule:{
                    username:[
                        {required:true,message:'用户名不能为空',trigger:'blur'},
                        {validator:checkUsername,trigger:'blur'}
                    ],
                    password:[
                        {required:true,message:'密码不能为空',trigger:'blur'}
                    ],
                    phone:[
                        {required:true,message:'手机号不能为空',trigger:'blur'},
                        {validator:checkPhone,trigger:'blur'}
                    ]
                }
            }
        },
        methods: {
            handleSizeChange(newVal) {
                console.log(newVal)
                this.queryInfo.pageSize = newVal
            },
            handleCurrentChange(newVal) {
                console.log(newVal)
            },

            queryUser() {
                this.getUserList();
            },

            queryUserById(id)
            {
                console.log(id)
            },

            addUser()
            {
                 this.$refs[this.addForm].validate((valid)=>{
                      if (valid)
                      {

                          this.addDiaVisible=false

                      }else
                      {
                           this.$message({
                               message:'表单验证失败',
                               type:'error'
                           })
                      }
                 })
            },

            editUser(id)
            {

            },
            deleteUser(id)
            {
                const  res=this.$confirm('是否删除该用户','提示',{
                      confirmButtonText:'确定',
                      cancelButtonText:"取消",
                      type:'warning'
                })
                console.log(res)
            },
            getUserList() {
                this.$http.get("/users", {params: this.queryInfo}).then((data) => {

                }).catch((error) => {
                    console.log(error)
                })
            },
            handleClose(done)
            {
                this.$refs[this.addForm].resetFields()
                done()
            }
        }
    }
</script>

<style scoped>
    /*div{*/
    /*    width:100%;*/
    /*    height: 100%;*/
    /*}*/

    .el-card {
        width: 100%;
        margin-top: 20px;
    }

    .el-table {
        margin-top: 20px;
    }


</style>
