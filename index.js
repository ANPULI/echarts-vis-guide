import * as echarts from "echarts";

// 基于准备好的dom，初始化echarts实例
// based on the prepared dom, initiate an echarts instance
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
// specify configuration and data
var option = {
    title: {
        text: 'ECharts Demo'
    },
    tooltip: {},
    legend: {
        data:['Sales']
    },
    xAxis: {
        data: ["Shirts","Cardigan","Sweater","Pants","High Heels","Socks"]
    },
    yAxis: {},
    series: [{
        name: 'Sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

// 使用刚指定的配置项和数据显示图表。
// Use the config and data set above to show the graph
myChart.setOption(option);