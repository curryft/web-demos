<template>
  <div class="page3">
    <button @click="goBack">返回</button>
    <p>{{msg}}</p>
    <p>{{str}}</p>
      <div @click.self="div_click" style="display: inline-block;width: 200px;background-color: red">
          <button type="button" @click.stop="stop_click">StopPropagation</button>
      </div>
      <button @click="aa()">A</button>
      <br>
      <input type="" v-model.number="msg">

      <child :level="level">Hello Word!</child>
      <br>
      <br>
      <br>
      <button class="button" @click="countDown" :disabled="dis" :class="{aa: this.dis}">
          {{content}}
      </button>
      <!--<Calendar-->
          <!--monthStr="2018-04"-->
          <!--eventList={eventList}-->
          <!--eventForm={(event, closePopover) => {-->
          <!--return <CustomForm-->
              <!--event={event}-->
              <!--closePopover={closePopover}-->
              <!--onChangeTime={this.onChangeTime}-->
              <!--deleteEvent={this.deleteEvent}-->
          <!--/>-->
          <!--}}-->
          <!--onChangeTime={this.onChangeTime}-->
          <!--deleteEvent={this.deleteEvent}-->
          <!--createNewEvent={this.createNewEvent}-->
          <!--/>-->
      <!--</Calendar>>-->
  </div>
</template>

<script>
// import moment from 'moment'
import Calendar from 'drag-calendar';
import bus from './Bus'
import Vue from 'vue'

Vue.component('child',{
    render(h){
        const tag = ['div', 'p', 'strong', 'h1', 'h2', 'textarea'][this.level]
        console.log(tag)
        console.log(this.$slots.default)
        return h(tag,this.$slots.default)
    },
    props:{
        level:{
            type:Number,
            required:true
        }
    }
})

export default {

    name: "page3",
  data() {
    return {
        content:'发送验证码',
        totalTime:10,
        dis:false,
        level:1,
	  msg:'ss',
	  str:'',
        eventList : [{
            id: 12,
            startTime: "2018-04-4",
            endTime: "2018-04-15",
            displayName: "（主）小鹿",
            userId: 1,
        }]
    };
  },
  methods: {
        countDown(){

            this.content = this.totalTime + 's后重新发送';
            this.dis = true;
            let clock = window.setInterval(()=>{
                this.totalTime--;
                this.content = this.totalTime + 's后重新发送'
                if(this.totalTime<1){
                    window.clearInterval(clock);
                    this.content = '重新发送验证码'
                    this.totalTime = 10;
                    this.dis = false
                }
            },1000)
        },
    getData() {
        console.warn('我调用第三个页面getData方法了')
        this.str= "我是通过调用方法加载的数据。。。";
    },
      aa(){
        alert(this.$moment().format('MMMM Do YYYY, h:mm:ss a'))

      },
      div_click: function () {
          console.log("div click...");
      },
      stop_click: function () {
          console.log("stop_click...");
      },
    goBack(){
        this.$router.go(-1)
    }
  },
  beforeRouteEnter(to, from, next){
      console.log('我是第三个页面的beforeRouteEnter方法')
      next()
  },
  created(){
	  console.log('我是第三个页面的 created 方法')
  },
  mounted(){
      bus.$emit('qq',123)
	  this.getData()
	  console.log('我是第三个页面的 mounted 方法')
  },
  activated(){
	  console.log('我是第三个页面的 activated 方法')
  },
  deactivated(){
	  console.log('我是第三个页面的 deactivated 方法')
  },
  destroyed(){
	  console.log('我是第三个页面的 destroyed 方法')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .button {
        width: 150px;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #66b1ff;
        border: 1px solid #dcdfe6;
        border-color: #dcdfe6;
        color: #fff;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 6px;
    }

    .button:hover {
        background-color: #409eff;
    }

    .aa {
        background-color: #ddd;
        border-color: #ddd;
        color: #57a3f3;
        cursor: not-allowed;
    }
    .aa:hover{
        background-color:#ddd ;
    }


</style>
