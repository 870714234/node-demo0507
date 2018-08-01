<template>
    <div>
        <div id="title">
            <h1>数据中心态势感知系统</h1>
        </div>
        <evaluate class="module module-evaluate"></evaluate>
        <elec class="module module-elec"></elec>
        <ups class="module module-ups"></ups>
        <mahjong class="module module-mahjong"></mahjong>
        <three-d class="module module-threeD"></three-d>
        <env class="module module-env"></env>
        <alarm class="module module-alarm"></alarm>
        <notice class="module module-notice"></notice>
        <!--<router-view></router-view>二级界面模态框-->
    </div>
</template>

<script>
    import Evaluate from "./components/evaluate";
    import Elec from "./components/elec";
    import Ups from "./components/ups";
    import Mahjong from "./components/mahjong";
    import ThreeD from "./components/threeD";
    import Env from "./components/env";
    import Alarm from "./components/alarm";
    import Notice from "./components/notice";

    export default {
        name: "App",
        components: {Notice, Alarm, Env, ThreeD, Mahjong, Ups, Elec, Evaluate}
    }
</script>

<style scoped>
    #title {
        height: 7%;
        background-image: url(./imgs/标头.png);
        background-size: 100% 100%;
        text-align: center;
    }

    #title h1 {
        margin-top: 0;
        padding-top: 1%;
    }

    #title, .module-title {
        color: aqua;
    }

    .module-evaluate {
        top: 6%;
        left: 5px;
        width: 28.7%;
        height: 26%;
        background-image: url(./imgs/模块_边框1.png);
    }

    .module-elec {
        top: 33.2%;
        left: 5px;
        width: 28.7%;
        height: 36%;
        background-image: url(./imgs/模块_边框1.png);
    }

    .module-ups {
        top: 70.7%;
        left: 5px;
        width: 28.7%;
        bottom: 7px;
        background-image: url(./imgs/模块_边框1.png);
    }

    .module-mahjong {
        /*display: none;*/
    }

    .module-threeD {
        top: 37%;
        left: 29.5%;
        right: 29.5%;
        bottom: 27.5%;
        background-image: url(./imgs/模块_边框2.png);
    }

    .module-env {
        top: 74%;
        left: 29.5%;
        right: 29.5%;
        bottom: 7px;
        background-image: url(./imgs/模块_边框2.png);
    }

    .module-alarm {
        top: 6%;
        left: 71%;
        right: 9px;
        bottom: 27.5%;
        background-image: url(./imgs/模块_边框3.png);
    }

    .module-notice {
        top: 74%;
        left: 71%;
        right: 12px;
        bottom: 7px;
        background-image: url(./imgs/模块_边框2.png);
    }
</style>