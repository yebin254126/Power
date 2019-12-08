<template>
       <div id="lineChart">
       </div>
</template>

<script>

    export default {
        name: "lineChart",
        props:['chartData'],
        data()
        {
            return {}
        },
        methods:{
            lineChart()
            {
                var chart=this.$echarts.init(document.getElementById("lineChart"),"dark")
                var option={
                    title: {

                    },
                    dataset:
                        {
                            //提供一份数据。
                            dimensions: ['product', '2015', '2016', '2017'],
                            source:

                                [
                                {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
                                {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
                                {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
                                {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
                            ]
                        }

                    ,
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

                    },

                    dataZoom:{
                        type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                        start: 10,      // 左边在 10% 的位置。
                        end: 60         // 右边在 60% 的位置。
                    },

                    xAxis: {
                        type:'category',
                        boundaryGap: true,
                    }
                    ,
                    yAxis: {
                        type: 'value',
                        scale: true,
                    }
                    ,
                    series: [
                        {

                            type: 'line',
                            smooth:true,


                        },
                        {

                            type: 'line',
                            smooth:true,


                        },
                        {

                            type: 'line',
                            smooth:true,


                        },

                    ]
                }
                chart.setOption(option)
            }
        },
        mounted() {
            this.lineChart()
        }
    }
</script>

<style scoped>
    div {

        width: 600px;
        height: 500px;
    }
</style>
