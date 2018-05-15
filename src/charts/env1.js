var echarts = require('echarts');
require('../lib/dark');
var flexslider = require('../lib/jquery.flexslider');

// $(function () {
//     charts.env1.setOption(options.env1, true);
//     charts.env2.setOption(options.env1, true);
//     charts.env3.setOption(options.env1, true);
// });

var option_env1 = {
    grid: {
        top: '55%',
        bottom: '15%',
        left: '15%',
        right: '10%'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: [{
        type: 'value',
        name: '温度(℃)',
        nameTextStyle: {
            color: '#33ff00'
        },
        max: 60,
        splitLine: {
            show: false
            // lineStyle: {
            //     type: 'dashed'
            // }
        }
    },{
        type: 'value',
        name: '湿度(%)',
        nameTextStyle: {
            color: '#8100ff'
        },
        splitLine: {
            show: false
        },
        max: 80
    }],
    series: [{
        type: 'line',
        name: '温度',
        yAxisIndex: 0,
        itemStyle: {
            normal: {
                color: "#33ff00"
            }
        },
        data: [22, 43, 50, 43, 12, 13, 13]
    },{
        type: 'line',
        name: '湿度',
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color: '#6100ff'
            }
        },
        data: [43, 43, 45, 43, 32, 43, 33]
    },{
        type: 'gauge',
        name: '温度',
        center: ['30%','25%'],
        radius: '40%',
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 40,
        axisLine: {
            lineStyle: {
                color: [[0.15, '#ff0000'], [0.3, '#ffcc00'], [0.7, '#00ffff'], [0.85, '#ffcc00'], [1, '#ff0000']],
                width: 3
            }
        },
        splitLine: {
            length: 6,
            lineStyle: {
                color: 'auto'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            distance: 1,
            fontSize: 9
            // textStyle: {
            //     fontSize: 9
            // }
        },
        pointer: {
            length: '50%',
            width: 5
        },
        detail: {
            formatter: '{value}℃',
            fontSize: 20
            // textStyle: {
            //     fontSize: 20
            // }
        },
        data:[{value: 26}]
    },{
        type: 'gauge',
        name: '湿度',
        center: ['70%','25%'],
        radius: '40%',
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 100,
        axisLine: {
            lineStyle: {
                color: [[0.15, '#ff0000'], [0.3, '#ffcc00'], [0.7, '#00ffff'], [0.85, '#ffcc00'], [1, '#ff0000']],
                width: 3
            }
        },
        splitLine: {
            length: 6,
            lineStyle: {
                color: 'auto'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            distance: 1,
            fontSize: 9
            // textStyle: {
            //     fontSize: 9
            // }
        },
        pointer: {
            length: '50%',
            width: 5
        },
        detail: {
            formatter: '{value}%',
            fontSize: 20
            // textStyle: {
            //     fontSize: 20
            // }
        },
        data:[{value: 35}]
    }],
    backgroundColor: 'rgba(0, 0, 154, 0.1)'
};

module.exports = {
    bind: function (dom) {
        echarts.init(dom, 'dark').setOption(option_env1);
    },
    slide: function (selector) {
        flexslider.flexslider(selector, {
            animation: 'slide',
            direction: 'vertical',
            reverse: true,
            slideshow: false,
            animationSpeed: 2000,
            // pauseOnAction: false,
            controlNav: false,
            directionNav: false,
            keyboard: false
        })
    }
};