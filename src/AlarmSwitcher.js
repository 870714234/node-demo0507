var $ = require('./lib/jquery-3.3.1');
var alarmMonthLeft = require('./charts/alarm-left');
var alarmMonthRight = require('./charts/alarm-right');
var alarmYear = require('./charts/alarm-year');

var period = Infinity;
var timer = null;

var showLoadingForSecond = function(chart) {
    chart.showLoading({text: '加载中......', maskColor: '#011220'});
    setTimeout(()=>{chart.hideLoading()}, 1000);
};


module.exports = {
    setPeriod: function (p) {
        period = p;
    },
    switch: function (stateShowing, stateToShow) {
        var self = this;
        document.getElementById('alarm-'+stateShowing).classList.add('hide');
        document.getElementById('alarm-'+stateToShow).classList.remove('hide');
        switch (stateToShow) {
            case 'month':
                showLoadingForSecond(alarmMonthLeft.getChart());
                showLoadingForSecond(alarmMonthRight.getChart());
                break;
            case 'year':
                showLoadingForSecond(alarmYear.getChart());
                break;
            default:
                console.error("???what did u send to me:", stateToShow);
                break;
        }
        clearTimeout(timer);
        timer = setTimeout(()=>{self.switch(stateToShow, stateShowing)},period);
    }
};