<template>
    <div>
        <p class="module-title-center" style="margin-top: -.6vh;">
            <span class="module-title">报警分析</span></p>
        <div class="module-content">
            <div id="alarm-current" style="height: 45%;">
                <h4 class="alarm-title" style="text-align: left">当前</h4>

                <div class="alarm-current-wrapper">
                        <span class="alarm-current-count">当前<br/>
                            <span class="alarm-lamp-location">&emsp;&emsp;</span>
                            <b>0</b>个<br/>
                            报警</span>
                    <div class="circle"></div>
                    <div class="indicator elec" style="top: 0; right: 120%">配电系统正常</div>
                    <div class="indicator ups" style="top: 40%; right: 120%">UPS系统正常</div>
                    <div class="indicator env" style="top: 80%; right: 120%">环境温湿度正常</div>
                    <div class="indicator aircdt" style="top: 0; right: -60%">精密空调系统正常</div>
                    <div class="indicator security" style="top: 40%; right: -60%">安防系统正常</div>
                    <div class="indicator fire" style="top: 80%; right: -60%">消防系统正常</div>
                    <img class="alarm-lamp" src="" alt="报警灯"/>
                </div>
                <div class="alarm-info">
                    <div class="info-item first-item"></div>
                    <div class="info-item second-item"></div>
                </div>

            </div>
            <div id="alarm-month" style="height: 50%">
                <h4 class="alarm-title"><b>月度统计</b>&nbsp;<small>年度统计</small>
                </h4>
                <div id="alarm-month-left" class="echarts" style="width: 45%"></div>
                <div id="alarm-month-right" class="echarts" style="width: 55%; left: 45%"></div>
            </div>
            <div id="alarm-year" style="height: 50%">
                <h4 class="alarm-title">
                    <small>月度统计</small>&nbsp;<b>年度统计</b></h4>
                <ul class="btn-group">
                    <li class="btn alarm-level"><a>等级</a></li>
                    <li class="btn alarm-location"><a>机房</a></li>
                    <li class="btn alarm-system"><a>系统</a></li>
                </ul>
                <div id="alarm-below" class="echarts"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "alarm"
    }
</script>

<style scoped>
    .module-content {
        height: 96%;
        padding: 0 4%;
        top: -1%;
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .module-content > div { /*day month year*/
        position: relative;
    }

    .alarm-title {
        color: #0099ff;
        text-decoration: underline;
    }

    .alarm-title small {
        color: rgba(0, 153, 255, 0.5);
    }

    #alarm-current {
        display: flex;
        flex-direction: column;
    }

    #alarm-current .alarm-current-wrapper {
        width: 18vh;
        height: 18vh;
        margin: 0 auto;
        position: relative;
    }

    #alarm-current .alarm-current-wrapper .alarm-current-count {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: #0cf;
        font-size: 20px;
        text-align: center;
        white-space: nowrap;
        z-index: 1;
    }

    #alarm-current .alarm-current-count b {
        font-size: 2em;
        /*color: orangered;*/
    }

    #alarm-current .circle { /*大圆圈*/
        width: 100%;
        height: 100%;
        border: 2px dashed #0ff;
        border-radius: 50%;
        animation: rotate 25s infinite linear;
    }

    #alarm-current .indicator { /*六项指标*/
        width: 50%;
        height: 14%;
        position: absolute;
        color: #0cf;
        border-bottom: 1px dashed #0ff;
        font-size: 18px;
        white-space: nowrap;
    }

    #alarm-current .indicator:before { /*折线*/
        content: '';
        position: absolute;
        border-bottom: 1px dashed #0ff;
    }

    #alarm-current .indicator:after { /*实心圆点*/
        content: '';
        position: absolute;
        border: 3px solid #0ff;
        border-radius: 50%;
    }

    #alarm-current .elec:before {
        width: 58%;
        top: 140%;
        left: 100%;
        transform: rotate(20deg);
    }

    #alarm-current .elec:after {
        top: 165%;
        left: 152%;
    }

    #alarm-current .ups:before {
        width: 40%;
        left: 100%;
        top: 100%;
    }

    #alarm-current .ups:after {
        left: 138%;
        top: 87%;
    }

    #alarm-current .env:before {
        width: 65%;
        left: 100%;
        top: 55%;
        transform: rotate(-20deg);
    }

    #alarm-current .env:after {
        left: 162%;
    }

    #alarm-current .aircdt:before {
        width: 40%;
        right: 100%;
        top: 140%;
        transform: rotate(-30deg);
    }

    #alarm-current .aircdt:after {
        top: 165%;
        left: -39%;
    }

    #alarm-current .security:before {
        width: 20%;
        top: 100%;
        right: 100%;
    }

    #alarm-current .security:after {
        left: -24%;
        top: 90%;
    }

    #alarm-current .fire:before {
        width: 50%;
        top: 60%;
        right: 100%;
        transform: rotate(25deg);
    }

    #alarm-current .fire:after {
        left: -50%;
        top: 12%;
    }

    #alarm-current .alarm-info {
        flex: 1;
        position: relative;
        overflow: hidden;
        text-align: center;
        margin: 0;
        margin-top: 1vh;
        color: orangered;
        /*background-color: rgba(255,0,0,0.3);*/
        font-size: 1.3em;
    }

    #alarm-current .alarm-info .info-item {
        position: absolute;
        left: 0;
        top: 0;
        white-space: nowrap;
        background-color: rgba(255, 0, 0, 0.3);
    }

    #alarm-current .alarm-info .second-item {
        top: 50%;
    }

    #alarm-current .alarm-lamp {
        display: none;
        height: 33px;
        position: absolute;
        right: 54%;
        top: 40.6%;
    }

    #alarm-current .alarm-lamp-location {
        display: none;
    }

    /*#alarm-current p {*/
    /*color: #00ff99;*/
    /*text-align: center;*/
    /*letter-spacing: 5px;*/
    /*font-size: 20px;*/
    /*}*/

    #alarm-month .echarts {
        position: absolute;
        top: 10%;
        bottom: 0;
    }

    #alarm-month-right {
        border: 1px solid #797979;
        border-radius: 6px;
    }

    #alarm-year > .btn-group {
        position: absolute;
        top: 3vh;
        right: 0;
    }

    #alarm-year > .btn-group > li {
        padding: 0 4px 2px;
        border-width: 3px;
        border-bottom: 2px solid rgba(0, 255, 255, 0.28);
        border-radius: 4px;
    }

    #alarm-year > .btn-group > li.active {
        border-bottom-color: #0ff !important;
    }

    #alarm-year > .btn-group a {
        font-size: 14px;
        color: #0cf;
    }

    #alarm-below {
        width: 100%;
        top: 15%;
        bottom: 0;
        position: absolute;
    }
</style>