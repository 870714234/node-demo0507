require('bootstrap/dist/css/bootstrap.css');
require('./lib/flexslider.css');
require('./home.css');

var chart_elec = require('./elec1');
chart_elec.bind(document.getElementById('elec1'));
chart_elec.bind(document.getElementById('elec2'));
chart_elec.bind(document.getElementById('elec3'));
chart_elec.slide('#elec-slider');


var chart_upsBar = require('./ups-bar');
var chart_upsPie = require('./ups-pie');
chart_upsBar.bind(document.getElementById('upsBar'));
chart_upsPie.bind(document.getElementById('upsPie'));
chart_upsPie.roll(5*1000);


var chart_env = require('./env1');
chart_env.bind(document.getElementById('env1'));
chart_env.bind(document.getElementById('env2'));
chart_env.bind(document.getElementById('env3'));
chart_env.slide('#env-slides');


var chart_alarmYear = require('./alarm-year');
chart_alarmYear.bind(document.getElementById('alarm-below'));


var floorSwitcher = require('./floorSwitcher');
floorSwitcher.init(5*1000);