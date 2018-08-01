<template>
    <div>
        <div class="mahjong-elec" style="top: 10%">
            <address>
                <p>总用电功率</p>
                <small>单位：kW/千瓦</small>
            </address>
            <span id="总用电功率">00000</span>
        </div>
        <div class="mahjong-elec" style="top: 19%">
            <address>
                <p>IT设备功率</p>
                <small>单位：kW/千瓦</small>
            </address>
            <span id="IT设备功率">00000</span>
        </div>
        <div class="mahjong-elec" style="top: 28%">
            <address>
                <p>总PUE</p>
                <small>范围：≥1</small>
            </address>
            <span id="总PUE">000</span>
        </div>

        <div class="mahjong-keyongxing" style="top: 10%">
            <address>
                <p>已启用时间</p>
                <small>单位：h/小时</small>
            </address>
            <span id="数据中心已启用时间">00000</span>
        </div>
        <div class="mahjong-keyongxing" style="top: 19%">
            <address>
                <p>保障运行时间</p>
                <small>单位：h/小时</small>
            </address>
            <span id="保障数据中心正常运行时间">00000</span>
        </div>
        <div class="mahjong-keyongxing" style="top: 28%">
            <address>
                <p>可用性</p>
                <small>单位：%</small>
            </address>
            <span id="数据中心可用性">0000</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mahjong"
    }
</script>

<style scoped>
    .mahjong-elec, .mahjong-keyongxing {
        height: 7%;
        display: flex;
        position: fixed;
        background-image: url(../imgs/主显示_边框.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }

    .mahjong-elec {
        width: 18%;
        left: 31.5%;
    }

    .mahjong-keyongxing {
        width: 18%;
        left: 50.6%;
    }

    .mahjong-elec address {
        width: 35%;
        margin: 0 8px;
        text-align: center;
    }

    .mahjong-keyongxing address {
        width: 40%;
        margin: 0 8px;
        text-align: center;
    }

    address p {
        margin-top: 1vh;
        margin-bottom: 0;
        color: #00ccff;
        font-size: 2vh;
    }

    address small {
        color: #00cccc;
    }

    address + span {
        color: #0dffaa;
        font-size: 4.9vh;
        font-weight: bold;
        letter-spacing: 8px;
    }
</style>