// $(function () {
//     charts.alarmRight.setOption(options.alarmRight, true);
// });
var $ = require('../lib/jquery-3.3.1');
require('../lib/resize');
var echarts = require('echarts');


var chart;
var option = {
    title: {
        text: '配电系统',
        padding: [5, 20],
        left: 'center',
        backgroundColor: 'green'
    },
    grid: {
        top: '60%',
        bottom: '10%'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: (function () {
            var res = [];
            for(var i = 0; i < 30; i++)    res.push(i+1);
            return res;
        })(),
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    series: [{
        type: 'line',
        data: (function () {
            var res = [];
            for(var i = 0; i < 30; i++)    res.push(Math.round(Math.random()*5));
            return res;
        })(),
        animationDuration: 1500
    },{
        type: 'pie',
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: '{b}：{c}'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        center: ['25%','36%'],
        radius: ['20%','38%'],
        data: [
            {value:0, name:'严重'},
            {value:20, name:'紧急'},
            {value:15, name:'一般'},
            {value:40, name:'异常'}
        ]
    },{
        type: 'pie',
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: '{b}：{c}'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        center: ['75%','36%'],
        radius: ['20%','38%'],
        data: [
            {value:5, name:'一层'},
            {value:20, name:'二层'},
            {value:15, name:'三层'}
        ]
    }],
    backgroundColor: 'rgba(0,255,255, 0.11)'
};

// $("#alarm-month-right").resize(function () {
//     charts.alarmRight.resize();
// });
module.exports = {
    bind: function (dom) {
        chart = echarts.init(dom);
        chart.setOption(option);
        $(dom).resize(()=>{
            console.log("resized!!@alarm-right.js");
            chart.resize();
        })
    },
    getChart: function () {
        return chart;
    }
};