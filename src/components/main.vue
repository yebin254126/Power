<template>
    <el-container>
        <el-aside :width="asideWidth">
            <div class="logo">
                <el-avatar shape="square" :src="logoSrc"  :size="50">
                </el-avatar>
<!--                <span>Management</span>-->
            </div>
            <el-menu
                    router
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    :unique-opened="true"
                    :collapse="isCollapse"
                    :collapse-transition="false">
                <el-submenu index="1" :index="item.path" v-for="item in this.menuList" :key="item.id">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span>{{item.name}}</span>
                    </template>

                    <el-menu-item v-for="subitem in item.children" :index="subitem.path" :key="subitem.id">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>{{subitem.name}}</span>
                        </template>

                    </el-menu-item>

                </el-submenu>

            </el-menu>
        </el-aside>
        <el-container>
            <el-header class="space-between">
                <div @click="toggleCollapase" class="header-collapse">
                    <span :class="[this.isCollapse?'el-icon-s-unfold':'el-icon-s-fold']"></span>
                </div>
                <div class="user-block space-between" >

                    <div class="userInfo space-between" @click="showUserInfo">
                        <div>
                            <el-avatar :size="50" :src="imageSrc"></el-avatar>
                        </div>
                        <div>{{this.$store.state.userState.username}}</div>
                    </div>
                    <div><span @click="logOut">注销</span></div>
                </div>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "mainCom",
        data() {
            return {
                menuList: [
                    {
                        id: 1, name: '系统管理', path: '/rights', icon:'el-icon-setting', children: [
                            {id: 5, name: '监控台', path: '/monitor', children: []},
                            {id: 6, name: '日志', path: "/log", children: []}
                        ]
                    },
                    {
                        id: 2, name: '用户管理', path: '/users', icon:'el-icon-s-custom' ,children: [
                            {id: 7, name: '用户列表', path: '/userList',  children: []},

                        ]
                    },
                    {
                        id: 3, name: '角色管理', path: '/roles',icon:'el-icon-user' ,children: [
                            {id: 8, name: '角色列表', path: '/roles', children: []},
                        ]
                    },
                    {
                        id: 4, name: '权限管理', path: '/permissions',icon:'el-icon-bangzhu', children: [
                            {id: 9, name: '权限列表', path: '/rights', children: []},
                        ]
                    },
                ],
                imageSrc: require('@/images/r1.jpg'),
                logoSrc:require('@/images/logo.jpg'),
                isCollapse: false,
                collapaseIcon:'el-icon-s-unfold',
                asideWidth: '15%',
            }
        },
        methods: {
            toggleCollapase() {
                this.isCollapse = !this.isCollapse
                this.asideWidth = (this.isCollapse ? '5%' : '15%')
            },
            logOut() {
                this.$store.commit('removeUser')
                this.$router.push({path: '/'})
            },
            showUserInfo()
            {
                 this.$router.push({path:'/userInfo'})
            }
        },
        created() {
            this.$store.getters.getUserFormSessionStorage
        }
    }
</script>

<style scoped>
    .el-container {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }

    .el-aside {
        background-color: #545c64;
        color: #fff;
        height: 100%;

    }

    .logo
    {
        margin: 10px 10px 20px 20px;
        align-items: center;
    }

    .header-collapse span
    {
        font-size: 30px;
    }


    .el-menu {
        /*height: 100%;*/
        color: white;
        border-right: none;

    }

    .el-header {
        width: 100%;
        height: 100%;
        background-color: #545c64;
        color: #fff;

    }


    .userInfo {
        width: 100px;
        margin-right: 40px;

    }

    .userInfo div {

    }


    .space-between
    {
        display:  flex;
        justify-content: space-between;
        align-items: center;
    }

</style>
