var echarts = require('echarts');
require('../lib/dark');

// $(function(){
// 	charts.upsPie.setOption(options.upsPie, true);
// 	new UpsRoller().run(14*1000);
// });
var chart_upsPie = null;
var option_upsPie = {
    title: {
        text: '  1#\n电池组',
        textStyle: {
            fontSize: 15
        },
        left: '58%',
        top: '36%'
    },
    legend: {
        left: 'left',
        top: 'middle',
        orient: 'vertical',
        data: ['≤3.0mΩ','3.0-4.0mΩ','≥4.0mΩ']
    },
    series : [{
        type: 'pie',
        label: {
            normal: {
                position: 'inside',
                formatter: '{c}',
                textStyle: {
                    fontSize: 14
                }
            }
        },
        center: ['70%', '50%'],
        radius : ['40%', '70%'],
        data: [{
            value: 50,
            name: '≤3.0mΩ',
            // itemStyle: {
            //     normal: {
            //         color: '#013047'
            //         color: '#194E64'
            //         color: '#012251'
            //     }
            // }
        },{
            value: 30,
            name: '3.0-4.0mΩ',
            // itemStyle: {
            //     normal: {
            //         color: '#f15354'
            //     }
            // }
        },{
            value: 90,
            name: '≥4.0mΩ',
            // itemStyle: {
            //     normal: {
            //         color: '#7D3547'
            //     }
            // }
        }],
        itemStyle: {
            normal: {
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 3,
                // opacity: 0.7
                // shadowBlur: 10,
                // shadowColor: '#455f4e',
                // shadowOffsetX: 1,
                // shadowOffsetY: 2
            },
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        animationType: 'scale'
    }],
    
    // color: ['#0ce5b0','#1053e5','#9106e5'],  //太鲜艳
    color: ['#0c9b73','#10449b','#dd0000'],
    // animationDuration: 2500
};


function UpsRoller() {
    var that = this;
    this.switchTo = function (upsIndex) {
        option_upsPie.title.text = '  ' + upsIndex + '#\n电池组';
        chart_upsPie.clear();
        chart_upsPie.setOption(option_upsPie, true);

    };
    this.run = function (period) {
        that.switchTo(UpsRoller.upsIndex);
        UpsRoller.upsIndex = UpsRoller.upsIndex>=5 ? 1:UpsRoller.upsIndex+1;
        setTimeout(function () {
            that.run(period);
        }, period);
    }
}
UpsRoller.upsIndex = 1;




// $("#ups-pie").resize(function () {
//     charts.upsPie.resize();
// });

module.exports = {
    bind: function (dom) {
        chart_upsPie = echarts.init(dom, 'dark');
        chart_upsPie.setOption(option_upsPie);
    },
    roll: function (period) {
        new UpsRoller().run(period);
    }
};