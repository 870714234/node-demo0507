var $ = require('./lib/jquery-3.3.1');
var flexslider = require('./lib/jquery.flexslider');

var timer = null;
var period = Infinity;

module.exports = {
    init: function(p) {
        period = p;
        $('#elec-echarts-title').find('.floor1').click(()=>{this.switchTo(1)});
        $('#elec-echarts-title').find('.floor2').click(()=>{this.switchTo(2)});
        $('#elec-echarts-title').find('.floor3').click(()=>{this.switchTo(3)});
        this.switchTo(1);
    },
    switchTo: function(floor) {
        flexslider.switchTo('#elec-slider', floor-1);
        $("#elec-echarts-title").find(".btn").css("border-bottom-color","rgba(0,255,255, 0.28)");
        $("#elec-echarts-title").find(".floor"+floor).css("border-bottom-color","#0ff");

        flexslider.switchTo('#env-slides', floor-1);
        $("#env-indicate .row").css("background-color", "transparent");
        $("#env-indicate .floor"+floor).css("background-color", "rgba(0,255,255,0.2)");

        clearTimeout(timer);
        timer = setTimeout(()=>{
            this.switchTo(floor%3+1);
        }, period);
    },
    run: function (period) {

    }
};