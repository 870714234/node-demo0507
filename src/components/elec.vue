<template>
    <div class="elec"><p class="module-title module-title-left">配电系统</p>
        <div class="module-content">
            <div id="elec-indicate">
                <table class="table">
                    <tr class="equip">
                        <th class="title">设备：</th>
                        <th>高压柜(9)</th>
                        <th>变压器(4)</th>
                        <th>低压柜(14)</th>
                        <th>电容柜()</th>
                        <th>配电环境(3)</th>
                    </tr>
                    <tr class="state">
                        <th class="title">状态：</th>
                        <td class="高压柜 ">-</td>
                        <td class="变压器 ">-</td>
                        <td class="低压柜 ">-</td>
                        <td class="电容柜 ">-</td>
                        <td class="配电环境 ">-</td>
                    </tr>
                </table>
            </div>
            <div id="elec-echarts-title">
                <h4>各机房用电情况</h4>
                <nav class="btn-group">
                    <a class="btn floor1">一层</a>
                    <a class="btn floor2">二层</a>
                    <a class="btn floor3">三层</a>
                </nav>
            </div>
            <!--<div id="elec-slider" style="height: 68%">-->
                <!--<ul class="slides">-->
                    <!--<li id="elec1" class="echarts"></li>-->
                    <!--<li id="elec2" class="echarts"></li>-->
                    <!--<li id="elec3" class="echarts"></li>-->
                <!--</ul>-->
            <!--</div>-->
            <div id="elec-echarts" class="echarts"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "elec"
    }
</script>

<style scoped>
    .module-content {
        height: 88%;
        top: -10px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #elec-indicate, #ups-indicate {
        /*height: 100%; 把下面的echarts挤到底部*/
        position: relative;
    }

    #elec-indicate .table, #ups-indicate .table { /*垂直居中*/
        margin: 10px 0;
    }

    #elec-indicate th, #elec-indicate td, #ups-indicate th, #ups-indicate td {
        border: 0;
        padding: 3px 8px;
        text-align: center;
    }

    #elec-indicate th, #ups-indicate th {
        color: #0cf;
    }

    #elec-indicate th.title, #ups-indicate th.title {
        font-size: 120%;
        text-align: right;
    }

    #elec-indicate .normal, #ups-indicate .normal {
        color: #0f0;
    }

    #elec-indicate .no-data, #ups-indicate .no-data {
        color: #999;
    }

    #elec-indicate .warn, #ups-indicate .warn {
        color: #ff0;
    }

    #elec-indicate .error, #ups-indicate .error {
        color: #f00;
    }

    #elec-echarts-title {
        color: #09f;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        position: relative;
    }

    #elec-echarts-title .btn-group {
        top: 0;
        right: 5%;
        position: absolute;
    }

    #elec-echarts-title .btn-group a {
        padding: 0 4px 2px;
        border-width: 3px;
        border-bottom: 2px solid rgba(0, 255, 255, 0.28);
        border-radius: 4px;
        font-size: 14px;
        color: #0cf;
    }

    #elec-slider li {
        height: 18vh;
    }

    #elec-echarts {
        min-height: 20vh;
    }
</style>