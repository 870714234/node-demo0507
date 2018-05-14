var echarts = require('echarts');
var $ = require('../lib/jquery-3.3.1');
require('../lib/resize');
// $(function () {
//     charts.alarmYear.setOption(options.alarmYear, true);
// });
var chart;
var richOption = {
    Txt: {
        fontSize: 14,
        color: '#00ccff',
        padding: [0, 4, 0, 4]
    },
    txt: {
        color: '#00ccff',
        padding: [0, 4, 0, 4]
    },
    Stick: {
        width: '30%',
        height:0,
        borderWidth: 2,
        borderColor: '#00ffff'
    },
    stick: {
        width: '30%',
        height:0,
        borderWidth: 2,
        borderColor: 'rgba(0, 255, 255, 0.28)'
    },
    blank: {
        width: '3%'
    }
};
var option_alarmYear = {
    title: {
        text: '{Txt|等级}{txt|机房}{txt|系统}\n{blank|}{Stick|}{blank|}{stick|}{blank|}{stick|}',
        left: 'right',
        textStyle: {
            rich: richOption
        }
    },
    legend: {
        left: 'right',
        top: '25%',
        data: ['紧急','重要','一般','异常'],
        orient: 'vertical'
    },
    grid: {
        left: '10%',
        right: '15%',
        bottom: '10%'
    },
    xAxis: {
        name: '月份',
        data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'].map(function (t) { return t.replace("月",""); })
    },
    yAxis: {
        name: '数量',
        minInterval: 1,
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    series: [{
        type: 'bar',
        name: '紧急',
        stack: 'level',
        barCategoryGap: '60%',
        data: [0,0,0,0,1,0,0,0,1,0,0,0]
    },{
        type: 'bar',
        name: '重要',
        stack: 'level',
        data: (function () {
            var res = [];
            for(var i = 0; i < 12; i++)    res.push(Math.round(Math.random()*3));
            return res;
        })()
    },{
        type: 'bar',
        name: '一般',
        stack: 'level',
        data: (function () {
            var res = [];
            for(var i = 0; i < 12; i++)    res.push(Math.round(Math.random()*5));
            return res;
        })()
    },{
        type: 'bar',
        name: '异常',
        stack: 'level',
        data: (function () {
            var res = [];
            for(var i = 0; i < 12; i++)    res.push(Math.round(Math.random()*15));
            return res;
        })()
    }]
};

// $("#alarm-below").resize(function () {
//     charts.alarmYear.resize();
// });
module.exports = {
    bind: function (dom) {
        chart = echarts.init(dom);
        chart.setOption(option_alarmYear);
        $(dom).resize(()=>{
            console.log("resized!!!@alarm-year.js");
            chart.resize();
        });
    },
    getChart: function () {
        return chart;
    }
};