<template>
  <div class="page2">
    <button @click="goBack">返回</button>
    <p>{{msg}}</p>
    <p>{{str}}</p>
    <router-link to="page3">跳转到下一个页面</router-link>
      <li v-for="n in data11">{{n}}</li>
      <button v-on:click="warn('Form cannot be submitted yet.', $event)">
          Submit
      </button>
  </div>
</template>

<script>
    import bus from './Bus'
export default {
  name: "page2",
  data() {
    return {
      msg: "",
      str: "",
      isFirstEnter:false,
        data1:[1,2,3,4,5]
    };
  },
    computed:{
      data11 : function () {
        return this.data1.filter(function (data1) {
            return data1 % 2 == 0;
        })
}
    },
  methods: {
    getData() {
      console.warn("我调用第二个页面getData方法了");
      this.str = "我是通过调用方法加载的数据。。。";
    },
      warn: function (message, event) {
          // 现在我们可以访问原生事件对象
          if (event) event.preventDefault()
          alert(message)
      },
    goBack() {
        bus.$on('qq',val => {
            this.msg = val;
            console.log(this.msg);
        })
      this.$router.go(-1);
    }
  },
  beforeRouteEnter(to, from, next){
      console.log('我是第二个页面的beforeRouteEnter方法')
      if(from.name=='page3'){
        to.meta.isBack=true;
    }
      next()
  },
  created() {
    console.log("我是第二个页面的 created 方法");
    this.isFirstEnter=true;
      bus.$on('qq',val => {
          this.msg = val;
          console.log(this.msg);
      })

  },
  mounted() {
    console.log("我是第二个页面的 mounted 方法");

  },
  activated() {
    console.log("我是第二个页面的 activated 方法");
    if(!this.$route.meta.isBack || this.isFirstEnter){
        this.str=''
        this.getData();
    }
    this.$route.meta.isBack=false
    this.isFirstEnter=false;
  },
  deactivated() {
    console.log("我是第二个页面的 deactivated 方法");
  },
  destroyed() {
    console.log("我是第二个页面的 destroyed 方法");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
