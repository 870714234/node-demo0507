require('bootstrap/dist/css/bootstrap.css');
require('./lib/flexslider.css');
require('./home.css');

var chart_elec = require('./charts/elec1');
chart_elec.bind(document.getElementById('elec1'));
chart_elec.bind(document.getElementById('elec2'));
chart_elec.bind(document.getElementById('elec3'));
chart_elec.slide('#elec-slider');


var chart_upsBar = require('./charts/ups-bar');
var chart_upsPie = require('./charts/ups-pie');
chart_upsBar.bind(document.getElementById('upsBar'));
chart_upsPie.bind(document.getElementById('upsPie'));
chart_upsPie.roll(5*1000);


var chart_env = require('./charts/env1');
chart_env.bind(document.getElementById('env1'));
chart_env.bind(document.getElementById('env2'));
chart_env.bind(document.getElementById('env3'));
chart_env.slide('#env-slides');


var chart_alarmMonthLeft = require('./charts/alarm-left');
var chart_alarmMonthRight = require('./charts/alarm-right');
var chart_alarmYear = require('./charts/alarm-year');
chart_alarmYear.bind(document.getElementById('alarm-below'));
chart_alarmMonthRight.bind(document.getElementById('alarm-month-right'));
chart_alarmMonthLeft.bind(document.getElementById('alarm-month-left'));
chart_alarmMonthLeft.rotate(20*1000);


var floorSwitcher = require('./floorSwitcher');
floorSwitcher.init(25*1000);

var alarmSwitcher = require('./AlarmSwitcher');
alarmSwitcher.setPeriod(30*1000);
alarmSwitcher.switch('month','year');