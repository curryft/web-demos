<template>
  <div>

      <router-link to="page1">第一个页面</router-link>
      <router-link to="page2">第二个页面</router-link>
      <router-link to="page3">第三个页面</router-link>
      <router-link to="page4">第4个页面</router-link>
      <router-link to="page5">第5个页面 九宫格</router-link>
      <!--<child-1 :text="text" :count="count"></child-1>-->

  </div>
</template>
<script>


    export default {
        data(){
            return{
                text:'父组件',
                count:123456
            }
        }
    }


</script>
<style scoped>
a{
    display: block;
    margin-top: 20px;
}
</style>
