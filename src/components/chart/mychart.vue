<template>
    <el-card>
       <ve-line :data="chartData"
                :loading="loading"
                 width="600px"
                 height="500px"
                :data-zoom="datazoom"
               ></ve-line>
    </el-card>
</template>

<script>


    export default {
        name: "mychart",
        data() {
            return {
                chartSetting:{
                    //xAxisType:'category',
                    dataType:'percent',
                    label: {
                        show: true,
                        position: 'outside',
                        formatter: '{c}%',  //  展示如果需要％
                    },
                    yAxisType:['percent'],
                    scale:true,
                    yAxisName:['效率'],
                },
                datazoom:{
                    type: 'slider',
                    start: 0,
                    end: 100
                },
                loading:true,
                dataEmpty:true,
                chartData:{
                    columns:['time','efficiency'],
                    rows:this.getRows,
                }
            }

        },

        methods: {



            },

    computed:{

        getRows()
        {
            return this.$store.state.chartRows
        },


    }
    ,
    created()
    {
        //创建的时候给其赋值
        this.chartData.rows=this.getRows
    }
    ,
    mounted()
    {

    },
    destroyed() {

    },
     watch:{

         getRows:function (newValue,oldValue) {
                console.log('值改变了')
               if (newValue.length!=0)
               this.chartData.rows=newValue
         }

     }
    }
</script>

<style scoped>
    .el-card
    {
        width: 100%;
        padding: 10px 0px 30px 10px;

    }
    div {
        width: 600px;
        height: 500px;
        margin: 0 auto;
    }
</style>
