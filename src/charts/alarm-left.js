var echarts = require('echarts');
require('../lib/dark');
var alarmRight = require('./alarm-right');

var $ = require('../lib/jquery-3.3.1');
require('../lib/resize');


var chart;
var option = {
    title: {
        text: '{num|30}{downplay|次}',   /**/
        textStyle: {
            rich: {
                num: {
                    color: '#ffff00',
                    fontSize: 30
                },
                downplay: {
                    fontSize: 14,
                    verticalAlign: 'bottom'
                }
            }
        },
        left: 'center',
        top: 'middle'
    },
    series: [{
        type: 'pie',
        startAngle: 90,
        radius: ['45%', '80%'],
        label: {
            normal: {
                show: true,
                position: 'inside'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [
            {value: [20,], name: '空调', itemStyle: {color: '#00ffff'}},
            {value: [30,], name: '电力', itemStyle: {color: '#ff6633'}},
            {value: [40,], name: 'UPS', itemStyle: {color: '#33ffcc'}},
            {value: [50,], name: '消防', itemStyle: {color: '#0099cc'}},
            {value: [70,], name: '安防', itemStyle: {color: '#00cc66'}}
        ],
        animationDuration: 50,
        animationDurationUpdate: 0
    }]
};

var _rotateByAngle = function(timeTotal, angleTotal, callback) {
    var angleEach = angleTotal*16.7/timeTotal;   //16.7 * angleTotal/angleEach = timeTotal
    var angleAlready = 0;
    (function rotate() {
        angleAlready += angleEach;
        option.series[0].startAngle += angleEach;
        chart.setOption(option, true);
        if(angleAlready < angleTotal) {
            requestAnimationFrame(rotate);
        }
        else {
            callback();
        }
    })()
};
var _onRotateFinished = function(moduleNameNext) {
    var highlightLeftPie = function () {
        chart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
        });
    };
    var refreshRightCharts = function (moduleName) {
        alarmRight.getChart().setOption({
            title: {
                text: moduleName+'系统'
            }
        });
    };


    var datas = option.series[0].data;
    datas.push(datas.shift());
    option.series[0].startAngle = 90;
    chart.setOption(option);

    highlightLeftPie();
    refreshRightCharts(moduleNameNext);
};


module.exports = {
    bind: function (dom) {
        chart = echarts.init(dom, 'dark');
        chart.setOption(option);
        $(dom).resize(()=>{
            // console.log("resized!!!@alarm-left.js");
            chart.resize();
        });
    },
    rotate: function (period) {
        var self = this;
        var datas = option.series[0].data;

        var alarmCountTotal = datas.reduce(function (previousValue, currentValue) {
            return previousValue+parseInt(currentValue.value[0]);
        }, 0);

        //update data.value[1]*****adjust angle
        datas.map(function (data) {
            data.value[1] = data.value[0]/alarmCountTotal * 360;
        });


        _rotateByAngle(5000, datas[0].value[1], function () {
            _onRotateFinished(datas[1].name);
        });
        setTimeout(()=>{self.rotate(period)}, period);
    },
    getChart: function () {
        return chart;
    }
};