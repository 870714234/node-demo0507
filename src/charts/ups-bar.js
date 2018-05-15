var echarts = require('echarts');
require('../lib/dark');


// $(function () {
//     charts.upsBar.setOption(options.upsBar, true);
// });

var upsLoads = [[220,500],[179,500],[199,500],[79,125],[79,125]];

var option_upsBar = {
    title: {
        // text: '各UPS负载率',
        // textStyle: elec.config.title_textStyle,
        // x: 'center'
    },
    grid: {
        top: '15%',
        bottom: '5%',
        left: '5%',
        right: '5%',
        containLabel: true
    },
    xAxis: {
        type : 'value',
        splitLine:{
            show: true,
            lineStyle: {
                type: 'solid'
            }
        },
        axisLabel: {
            formatter: '{value}%'
        },
        axisTick:{
            show: false
        }
    },
    yAxis: {
        type : 'category',
        position: 'right',
        inverse: true,
        axisTick : {show: false},
        splitLine:{
            show: true,
            lineStyle: {
                type: 'solid'
            }
        },
        data : ['UPS1','UPS2','UPS3','UPS4','UPS5']
    },
    // tooltip : {
    //     trigger: 'axis',
    //     formatter: '{b}:{c}',
    //     axisPointer : {            // 坐标轴指示器，坐标轴触发有效
    //         type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    //     }
    // },
    series : [
        {
            name: 'UPS负载',//background
            type: 'bar',
            barGap: '-100%',
            barCategoryGap: '10%',
            data: [100, 100, 100, 100, 100],
            itemStyle: {
                normal: {
                    // color: caolv,
                    opacity: 0.4
                },
                emphasis: {
                    shadowBlur: 15,
                    shadowColor: '#ffffff',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0
                }
            }
        },
        {
            name:'UPS负载',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function (params) {
                        var index = params.dataIndex;
                        return upsLoads[index][0] +"kW";
                        // return upsLoads[index][0] +"KW/"+upsLoads[index][1] + "kVA";
                    },
                    textStyle: {
                        fontSize: 14
                    }
                }
            },
            data:upsLoads.map(function (item) {
                return item[0] / item[1] * 100;
            })
        }
    ]
};

// $("#ups-bar").resize(function () {
//     charts.upsBar.resize();
// });


module.exports = {
    bind: function (dom) {
        echarts.init(dom, 'dark').setOption(option_upsBar);
    }
};