<template>
    <div id="mychart">

    </div>
</template>

<script>
    export default {
        name: "charts",
        props: ['chartData'],
        data() {
            return {}
        },
        methods: {
            drawChart() {
                console.log(this.chartData)
                var chart = this.$echarts.init(document.getElementById("mychart"), 'dark')
                var option = {
                        title: {

                        },
                        tooltip: {},
                        legend: {
                        },
                        dataset: {
                            // 提供一份数据。
                            dimensions: ['product', '2015', '2016', '2017'],
                            source: [
                                ['Matcha Latte', 43.3, 85.8, 93.7],
                                ['Milk Tea', 83.1, 73.4, 55.1],
                                ['Cheese Cocoa', 86.4, 65.2, 82.5],
                                ['Walnut Brownie', 72.4, 53.9, 39.1]
                            ]
                        },
                        xAxis: {
                            type: 'category'
                        }
                        ,
                        yAxis: {}
                        ,
                        series: [
                            {

                                type: 'bar',
                            },
                            {
                                type: 'bar',
                            },
                            {

                                type:'bar',
                             }
                        ]
                    }
                ;
                chart.setOption(option)
            }
        },
        mounted() {
            this.drawChart()
        }

    }
</script>

<style scoped>
    div {
        width: 600px;
        height: 500px;
    }
</style>
