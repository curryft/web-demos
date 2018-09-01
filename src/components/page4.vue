<template>
<div style="height: 100%;width: 100%">
    <div>
    <div class="cube">
        <div class="cube-face front"><img src="http://120.78.158.202/1.jpg"></div>
        <div class="cube-face back"><img src="http://120.78.158.202/2.jpg"></div>
        <div class="cube-face left"><img src="http://120.78.158.202/3.jpg"></div>
        <div class="cube-face right"><img src="http://120.78.158.202/4.jpg"></div>
        <div class="cube-face top"><img src="http://120.78.158.202/5.jpg"></div>
        <div class="cube-face bottom"><img src="http://120.78.158.202/6.jpg"></div>
    </div>
    </div>
    <comments-list-new
        :comments="comments"
        :fetch="fetchComments">
    </comments-list-new>
    <el-menu :default-active="activeIndex" active-text-color="#fff" class="el-menu-demo mymenu" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">Home</el-menu-item>
        <el-menu-item index="2">About</el-menu-item>
        <el-menu-item index="3">Services</el-menu-item>
        <el-menu-item index="4">Events</el-menu-item>
    </el-menu>
    <div class="block">
        <el-carousel height="100vh" interval="5000">
            <el-carousel-item v-for="item in imgs" :key="item">
                <h3><img class="first-slide" :src="item" alt="First slide" style="width: 100vw;height: 100vh"></h3>
            </el-carousel-item>
        </el-carousel>
    </div>
    <!--<img class="first-slide" src="../../img/images/banner1.jpg" alt="First slide" style="width: 100vw;height: 100vh">-->
    <!--<button class="button animated" v-bind:class="{bounceInLeft:active}" id="button1" @mouseover="set">哈哈</button>-->

    <scroll id="aboutUs" animate-name="fadeInUp" style="margin-top: 100px">
        <span style="font-size: 35px;padding: 20px 0;">About Us</span>
    </scroll>
    <scroll id="aboutUsText" animate-name="fadeInLeft" delay="0.7" style="margin-top: 20px">
        <span style="font-size: 18px;font-weight: 300;font-family: 'Montserrat', sans-serif">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
    </scroll>
    <el-row>
        <el-col :span="12">
            <div class="grid-content bg-purple-dark" style="margin-top: 50px">
                <scroll id="aboutUs_img" animate-name="fadeInUp">
                    <img src="../../img/images/about-img.jpg" alt="about" class="img-responsive slideanim">
                </scroll>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple-dark">
                <scroll id="aboutUsH4" animate-name="fadeInUp" delay="1" style="position: absolute;top: 9%;">
                    <h4 style="font-size: 25px;font-family: 'Montserrat', sans-serif;">We're The Best</h4>
                </scroll>
                <scroll id="abousP" animate-name="fadeInUp" delay="1" style="position: absolute;top: 25%;">
                    <p style="font-size: 16px;font-weight: 300;line-height: 32px;color: #A7A7A7;width: 40vw;text-align: left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </scroll>
            </div>
        </el-col>
    </el-row>
    <div style="height: 800px;width: 200px;background-color: red"></div>
    <scroll id="Services_img" animate-name="fadeInUp" duration="1s" delay="1s" style="margin-top: 20px">
        <div class="absoluteImg">ss</div>
    </scroll>
    <scroll id="rr" animate-name="fadeIn" duration="1s" delay="1s" style="margin-top: 20px;display: block">
        <div style="height: 200px;width: 200px;background-color: red;margin: 0 auto;">ss的撒的撒</div>
    </scroll>
    <scroll id="tt" animate-name="fadeInLeft" duration="1s" delay="2s">
        <div style="height: 200px;width: 200px;background-color: red;margin: 0 auto;">ss</div>
    </scroll>
    <scroll id="yy" animate-name="fadeInLeft" duration="1s" delay="2s">
        <div style="height: 200px;width: 200px;background-color: red;margin: 0 auto;">ss</div>
    </scroll>


</div>
</template>

<script>
    import bus from './Bus'
    import CommentsListNew from "./CommentsListNew";
    import Scroll from './Scroll'
    import ElRow from "element-ui/packages/row/src/row";


    export default {
        components: {
            ElRow,
            CommentsListNew,Scroll},
        name: "page4",
        data(){
          return{
              active:false,
              isshow:false,
              isshow1:false,
              isshow2:false,
              imgs:['../../img/images/banner1.jpg','../../img/images/banner2.jpg','../../img/images/banner3.jpg']
          }
        },
        computed:{
            comments(){
                return this.$store.state.comments
            },

        },
        methods:{
            fetchComments(){
                return this.$store.dispatch('fetchComments')
            },
            set(){
                this.active = !this.active;
                console.log(this.active);
            },
        },
        mounted(){
            bus.$on('qq',val => {
                this.msg = val;
                console.log(this.msg);
            })
        }

    }
</script>

<style>
    body{
        font-family: 'Montserrat', sans-serif
    }
    .button{
        background: #0baae4;
        width: 100px;
        height: 30px;

        /*box-shadow:0 7px 0 #0880d7,*/
        /*0 8px 3px rgba(0, 0, 0, 0.3) ;*/
        border-radius: 4px;
        border: none;
        text-decoration: none;
        outline: none;
    }
    .mymenu{
        position: absolute;
        left: 40%;
        z-index: 10;
        background: rgb(255,255,255,0);
        top:5%
    }
    .absoluteImg{
        background: url("../../img/images/service.jpg") no-repeat;
        height: 853px;
        background-position: bottom;
        background-attachment: fixed;
        -webkit-background-size: cover;

    }
/*.fadeInLeft{*/
    /*animation-delay: 1s;*/
/*}*/


    /*#button1:hover{*/
        /*position: relative;*/
        /*top: 5px;*/
    /*}*/

</style>
