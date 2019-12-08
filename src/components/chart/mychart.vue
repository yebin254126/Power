<template>
    <el-card>
    <div id="chart">

    </div>
    </el-card>
</template>

<script>
    import SockJS from "sockjs-client"
    import Stomp from "stompjs"
    export default {
        name: "mychart",
        data() {
            return {
                path: 'http://localhost:8080/socket',
                socket: null,
                stompClient: null,
                chart:null,
                option:{},
                chartData: [
                    {'time':0,'efficiency':0},
                    {'time':1,'efficiency':0},
                    {'time':2,'efficiency':0},
                    {'time':3,'efficiency':0},
                    {'time':4,'efficiency':0},
                    {'time':5,'efficiency':0},
                    {'time':6,'efficiency':0},
                    {'time':7,'efficiency':0},
                    {'time':8,'efficiency':0},
                    {'time':9,'efficiency':0},
                    {'time':10,'efficiency':0},
                    {'time':11,'efficiency':0},



                ],
            }

        },

        methods: {

            initSocket() {
                this.socket = new SockJS(this.path);
                this.stompClient = Stomp.over(this.socket)
                this.stompClient.connect({'token': 'token'},
                    (frame) => {

                        this.stompClient.subscribe("/topic/getData", (data) => {
                            var s = JSON.parse(data.body)
                            this.chartData=s
                        })
                    }, (error) => {
                        console.log(error)
                    }
                )


            },

            disConnect() {
                if (this.stompClient) {
                    this.stompClient.disConnect()
                }
            },

            initChart() {
                this.chart = this.$echarts.init(document.getElementById("chart"));
                this.option = {
                    title: {
                        text: '效率表'
                    },
                    dataset: {
                        dimension: ['time', 'efficiency'],
                         source: this.chartData,

                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#283b56'
                            }
                        }
                    },
                    legend: {
                        data:['效率']
                    },

                    dataZoom: {
                        type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                        start: 0 ,     // 左边在 10% 的位置。
                        end: 100         // 右边在 60% 的位置。
                    },

                    xAxis: {
                        type: 'category',
                        name:'时间',
                        boundaryGap: true,
                    }
                    ,
                    yAxis: {
                        type:"value",
                        name:'效率',
                        scale: true,
                    },
                    series: {
                        type: "line",
                        smooth: true,
                        encode: {
                            x: 'time',
                            y: 'efficiency'
                        }
                    }
                }

                this.chart.setOption(this.option)

        }
    }
    ,
    created()
    {
        console.log('初始化')
        this.initSocket()
    }
    ,
    mounted()
    {
        this.initChart()
    },
    destroyed() {
          //  this.disConnect()
    },
     watch:{
           chartData:function(newValue,oldValue){

                 this.option.dataset.source=newValue
                 this.chart.setOption(this.option)
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
