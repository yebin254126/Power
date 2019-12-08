<template>
     <div>
         <el-card>
             <el-table :data="rightsList">
                 <el-table-column type="index"></el-table-column>
                 <el-table-column label="权限名城" prop="name"> </el-table-column>
                 <el-table-column label="路径" prop="path"></el-table-column>
                 <el-table-column label="权限等级" prop="level"></el-table-column>
             </el-table>
         </el-card>
     </div>
</template>

<script>
    export default {
        name: "rights",
        data()
        {
           return {
               rightsList:[
                   {id:1,name:'用户列表',path:'/userlist',level:0},
                   {id:1,name:'添加用户',path:'/addUser',level:0},
                   {id:1,name:'修改用户',path:'/editUser',level:0},
                   {id:1,name:'删除用户',path:'/deleteUser',level:0},
               ]
           }
        }
    }
</script>

<style scoped>

</style>
