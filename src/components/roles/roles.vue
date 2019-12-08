<template>
     <div>
         <el-card>
             <el-table :data="roles">
                 <el-table-column type="index">  </el-table-column>
                 <el-table-column label="角色名称" prop="name"></el-table-column>
                 <el-table-column label="角色描述" prop="des"></el-table-column>
                 <el-table-column label="操作">
                      <template slot-scope="scope">
                          <el-button  type="success" size="mini">修改</el-button>
                          <el-button  type="danger" size="mini"> 删除</el-button>
                          <el-button type="warning" size="mini" @click="treeDiaVisible=true">分配权限</el-button>
                      </template>
                 </el-table-column>
             </el-table>
         </el-card>
         <el-dialog :visible.sync="treeDiaVisible" title="分配权限" width="30%" >
             <el-tree :data="permissions" :props="defaultProps" ref="treeRef"
                      :show-checkbox="true"
                      node-key="id"
                      default-expand-all
                      :default-checked-keys="[2,8]">

             </el-tree>
             <span slot="footer" class="dialog-footer">
                <el-button @click="treeDiaVisible = false">取 消</el-button>
                <el-button type="primary" @click="allotPermission">确 定</el-button>
                </span>
         </el-dialog>
     </div>
</template>

<script>
    export default {
        name: "roles",
        data()
        {
            return {
                  roles:[
                      {id:1,name:'系统管理员',des:'最高权限用户',rights:[]},
                      {id:2,name:'管理员',des:'',rights:[]},
                      {id:3,name:'普通用户',des:'',rights:[]},
                      {id:4,name:'测试用户',des:'测试用的',rights:[]},
                      {id:5,name:'游客',des:'',rights:[]}
                  ],
                treeDiaVisible:false,
                permissions:[
                    {id:1,name:'用户管理',children:[
                            {id:2,name:'添加用户'},
                            {id:3,name:'删除用户'},
                            {id:4,name:'修改用户'},
                            {id:5,name:'查看用户'},
                        ]},
                    {id:6,name:'角色管理',children:[
                            {id:7,name:'添加角色'},
                            {id:8,name:'删除角色'},
                            {id:9,name:'修改角色'},
                            {id:10,name:'查看角色'},
                        ]}
                ],
                defaultProps:{
                      children:'children',
                      label:'name'
                }
            }
        },
        methods:{
            allotPermission()
            {

            }
        }

    }
</script>

<style scoped>

</style>
