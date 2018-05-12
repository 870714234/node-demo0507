$(function () {

    charts.alarmLeft.setOption(options.alarmLeft, true);

    var alarm_monthTotal = 210;
    var alarm_moduleAngles = {};
    options.alarmLeft.series[0].data.forEach(function (t) {
        alarm_moduleAngles[t.name] = t.value / alarm_monthTotal * 360;
    });
    localStorage.setItem("alarm_currentModule", Object.keys(alarm_moduleAngles)[0]);

    (function rotateToNext() {
        var moduleCurrent = localStorage.getItem("alarm_currentModule");
        var currentIndex = Object.keys(alarm_moduleAngles).indexOf(moduleCurrent);
        var nextIndex = currentIndex+1>=5 ? 0 : currentIndex+1;
        var moduleNameForNext = Object.keys(alarm_moduleAngles)[nextIndex];

        var angleOffset = alarm_moduleAngles[moduleCurrent];
        rotateByAngle(5000, angleOffset, moduleCurrent, moduleNameForNext);

        setTimeout(rotateToNext, 26*1000);
    })();

});

function rotateByAngle(timeTotal, angleTotal, moduleCurrent, moduleNext) {
    var angleEach = angleTotal*16.7/timeTotal;   //16.7 * angleTotal/angleEach = timeTotal
    var angleAlready = 0;
    (function rotate() {
        angleAlready += angleEach;
        options.alarmLeft.series[0].startAngle += angleEach;
        charts.alarmLeft.setOption(options.alarmLeft, true);
        if(angleAlready < angleTotal) {
            requestAnimationFrame(rotate);
        }
        else {
            localStorage.setItem("alarm_currentModule", moduleNext);

            var dataArr = options.alarmLeft.series[0].data;
            dataArr.push(dataArr.shift());
            options.alarmLeft.series[0].startAngle = 90;
            charts.alarmLeft.setOption(options.alarmLeft);

            highlightLeftPie();
            refreshRightCharts(moduleNext);
        }
    })()

}

function highlightLeftPie() {
    charts.alarmLeft.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 0
    });
}
function refreshRightCharts(moduleName) {
    charts.alarmRight.clear();
    options.alarmRight.title.text = moduleName + "系统";
    charts.alarmRight.setOption(options.alarmRight, true);
}


options.alarmLeft = {
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
            {value: 20, name: '空调', itemStyle: {color: '#00ffff'}},
            {value: 30, name: '电力', itemStyle: {color: '#ff6633'}},
            {value: 40, name: 'UPS', itemStyle: {color: '#33ffcc'}},
            {value: 50, name: '消防', itemStyle: {color: '#0099cc'}},
            {value: 70, name: '安防', itemStyle: {color: '#00cc66'}}
        ],
        animationDuration: 50,
        animationDurationUpdate: 0
    }]
};


$("#alarm-month-left").resize(function () {
    charts.alarmLeft.resize();
});