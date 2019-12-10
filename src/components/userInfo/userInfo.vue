<template>
<div>
    <el-card>
        <el-container>
            <el-aside width="15%">
                <el-menu router default-active="/simpleInfo">
                    <el-menu-item index="/simpleInfo">基本设置</el-menu-item>
                    <el-menu-item index="/securityInfo">安全设置</el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-card>
</div>
</template>

<script>
    export default {
        name: "userInfo"
    }
</script>

<style scoped>


    .el-card {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }

    /*.el-container {*/
    /*    width: 100%;*/
    /*    height: 100%;*/

    /*}*/

    .el-aside {
        height: 100%;
    }

    .el-menu {
        height: 100%;
    }
</style>
