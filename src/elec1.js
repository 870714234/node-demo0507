var echarts = require('echarts');
var flexslider = require('./lib/jquery.flexslider');

// $(function () {
    // charts.elec1.setOption(options.elec1, true);
    // charts.elec2.setOption(options.elec1, true);
    // charts.elec3.setOption(options.elec1, true);

    // charts.elec1.setOption({title: {
    //     text: elecTitleText[0]
    // }});
    // charts.elec2.setOption({title: {
    //     text: elecTitleText[1]
    // }});
    // charts.elec3.setOption({title: {
    //     text: elecTitleText[2]
    // }});
// });

// var elecTitleText = ['{Txt|一层}{txt|二层}{txt|三层}\n{blank|}{Stick|}{blank|}{stick|}{blank|}{stick|}',
//     '{txt|一层}{Txt|二层}{txt|三层}\n{blank|}{stick|}{blank|}{Stick|}{blank|}{stick|}',
//     '{txt|一层}{txt|二层}{Txt|三层}\n{blank|}{stick|}{blank|}{stick|}{blank|}{Stick|}'];


var option_elec1 = {
    legend: {
        left: '25%',
        data: ['总用电', 'IT设备用电']
    },
    grid: {
        top: '20%',
        left: '3%',
        right: '35%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value',
        name: '功率(kW)',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    series: [{
        type: 'line',
        name: '总用电',
        itemStyle: {
            color: "aqua"
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320],
    },{
        type: 'line',
        name: 'IT设备用电',
        itemStyle: {
            color: '#00ff00'
        },
        data: [520, 632, 601, 834, 690, 1030, 1020],
    },{
        type: 'gauge',
        center: ['83%','60%'],
        radius: '60%',
        startAngle: 210,
        endAngle: -30,
        min: 0.8,
        max: 2.4,
        splitNumber: 8,
        axisLine: {
            lineStyle: {
                color: [[0.2, '#00ff00'], [0.8, '#00ffff'], [1, '#ff0000']],
                width: 5
            }
        },
        splitLine: {
            length: 10,
            lineStyle: {
                color: 'auto'
            }
        },
        axisTick: {
            length: 7,
            lineStyle: {
                color: 'auto'
            }
        },
        axisLabel: {
            distance: 0
        },
        pointer: {
            length: '50%',
            width: 5
        },
        title: {
            offsetCenter: [0, '85%']
        },
        detail: {
            fontSize: 24,
            // textStyle: {
            //     fontSize: 24
            // }
        },
        data:[{value: 1.32, name: 'PUE'}]
    }]
};

module.exports = {
    bind: function (dom) {
        echarts.init(dom).setOption(option_elec1);
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