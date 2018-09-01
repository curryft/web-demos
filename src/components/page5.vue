<template>
    <div id="box">
        <div class="item"><img src="../images/an1.jpg" width="150" height="100"></div>
        <div class="item"><img src="../images/an2.jpg" width="150" height="100"></div>
        <div class="item"><img src="../images/an3.jpg" width="150" height="100"></div>
        <div class="item"><img src="../images/2zhehzoa.jpg" width="150" height="100"></div>
        <div class="item"><img src="../images/er.png" width="150" height="100"></div>
        <div class="item"><img src="../images/coke_bg.jpg" width="150" height="100"></div>
        <div class="item"><img src="../images/coke_can.png" width="150" height="100"></div>
        <div class="item"><img src="../images/ready.png" width="150" height="100"></div>
        <div class="item"><img src="../images/FirstScreen.jpg" width="150" height="100"></div>
    </div>
</template>

<script>
    export default {
        name: "page5"
    }
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }

    html,
    body {
        width: 100%;
        height: 100%;
    }

    #box {
        margin: auto;
        width: 490px;
        height: 340px;
        border: 1px solid #000000;
        position: relative;
    }
    div.item {
        width: 150px;
        height: 100px;
        border-radius: 5px;
        margin: 5px;
        float: left;
        background: goldenrod;
        border: 1px solid lightgray;
        z-index: 1;
        text-align: center;
        font-size: 30px;
        line-height: 100px;
        cursor: move;
        transition-duration: 1s;
    }

</style>
