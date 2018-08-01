<template>
    <div>
        <p class="module-title module-title-left">总体评估</p>
        <div class="module-content">
            <div id="assess-bg">
                <div class="circles">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
                <div id="assess-radar" class="echarts"></div>
                <div class="labels">
                    <div class="env">
                        <div class="label-line"></div>
                        <div class="label-content">
                            <table class="table table-bordered">
                                <tbody>
                                <tr>
                                    <td colspan="2" class="title">环境</td>
                                </tr>
                                <tr>
                                    <th>等级</th>
                                    <td class="env-level">-</td>
                                </tr>
                                <tr>
                                    <th>检测点</th>
                                    <td class="env-monitor-points">-</td>
                                </tr>
                                <tr>
                                    <th>参数状态</th>
                                    <td class="env-state">-</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="mng">
                        <div class="label-line"></div>
                        <div class="label-content">
                            <table class="table table-bordered">
                                <tbody>
                                <tr>
                                    <td colspan="2" class="title">管理</td>
                                </tr>
                                <tr>
                                    <th>等级</th>
                                    <td class="mng-level">-</td>
                                </tr>
                                <tr>
                                    <th>运维人员</th>
                                    <td class="mng-people-count">-</td>
                                </tr>
                                <tr>
                                    <th>管理风险</th>
                                    <td class="mng-risk">-</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="power">
                        <div class="label-line"></div>
                        <div class="label-content">
                            <table class="table table-bordered">
                                <tbody>
                                <tr>
                                    <td class="title" rowspan="2">动力</td>
                                    <th>等级</th>
                                    <th>检测点</th>
                                    <th>参数状态</th>
                                </tr>
                                <tr>
                                    <td class="power-level">-</td>
                                    <td class="power-monitor-points">-</td>
                                    <td class="power-state">-</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "evaluate"
    }
</script>

<style scoped>
    table {
        border-collapse: collapse;
    }

    th, td {
        border: 1px solid #ddd;
    }

    .module-content {
        height: 88%;
        top: -17px;
        position: relative;
        display: flex;
    }

    #assess-bg {
        width: 13vh;
        height: 13vh;
        position: absolute;
        /*top: 1.5vh;*/
        left: 0;
        right: 0;
        margin: 0 auto;
    }

    #assess-bg #assess-radar {
        width: 100%;
        height: 100%;
    }

    #assess-bg .circle {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto auto;
        position: absolute;
        border: 2px dashed;
        border-radius: 50%;
        animation: rotate 25s infinite linear;
    }

    #assess-bg .circle:nth-child(1) {
        width: 30%;
        height: 30%;
        border-color: red;
    }

    #assess-bg .circle:nth-child(2) {
        width: 60%;
        height: 60%;
        border-color: blue;
    }

    #assess-bg .circle:nth-child(3) {
        width: 90%;
        height: 90%;
        border-color: green;
    }

    #assess-bg .label-line {
        width: 50%;
        height: 0;
        position: absolute;
        border-bottom: 1px solid cadetblue;
    }

    #assess-bg .labels .env .label-line {
        top: 27%;
        right: 89%;
    }

    #assess-bg .labels .mng .label-line {
        top: 27%;
        left: 89%;
    }

    #assess-bg .labels .power .label-line {
        width: 20%;
        top: 105%;
        left: 40%;
        transform: rotate(90deg);
    }

    #assess-bg .labels .label-content {
        position: absolute;
    }

    #assess-bg .labels .table {
        border-color: rgba(102, 255, 255, 0.4);
    }

    #assess-bg th, #assess-bg td {
        padding: 3px 5px;
        border-color: rgba(102, 255, 255, 0.4);
        white-space: nowrap;
        text-align: center;
        vertical-align: middle;
    }

    #assess-bg .table .title {
        min-width: 4vw;
        background-color: rgba(0, 255, 153, 0.22);
        font-size: 120%;
        color: #09f;
    }

    #assess-bg th {
        color: #0cf;
    }

    #assess-bg td {
        color: #0f0;
    }

    #assess-bg .env .label-content {
        top: 16%;
        right: 142%;
    }

    #assess-bg .mng .label-content {
        top: 16%;
        left: 142%;
    }

    #assess-bg .power .label-content {
        top: 117%;
        left: 50%;
        transform: translate(-50%, 0); /*水平居中*/
    }

    #assess-bg .power th, #assess-bg .power td {
        padding: 1px 7px;
    }
</style>