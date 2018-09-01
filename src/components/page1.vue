<template v-if="">
    <div class="page1">
        <button @click="goBack">返回</button>
        <p>{{msg}}</p>
        <input type="text" v-model="msg">
        <p>{{str}}</p>
        <router-link to="page2">跳转到下一个页面</router-link>
        <!--<div v-lazy-container="{ selector: 'img', }">-->
        <!--<img data-src="http://covteam.u.qiniudn.com/test16.jpg?imageView2/2/format/webp">-->
        <!--<img data-src="http://covteam.u.qiniudn.com/test16.jpg?imageView2/2/format/webp">-->
        <!--<img data-src="http://covteam.u.qiniudn.com/test16.jpg?imageView2/2/format/webp">-->
        <!--<img data-src="http://covteam.u.qiniudn.com/test16.jpg?imageView2/2/format/webp">-->
        <!--<img data-src="http://covteam.u.qiniudn.com/test16.jpg?imageView2/2/format/webp">-->
        <!--<img data-src="http://covteam.u.qiniudn.com/test16.jpg?imageView2/2/format/webp">-->
        <!--<img data-src="http://covteam.u.qiniudn.com/test16.jpg?imageView2/2/format/webp">-->
        <!--<img data-src="http://covteam.u.qiniudn.com/test16.jpg?imageView2/2/format/webp">-->
        <!--<img data-src="http://covteam.u.qiniudn.com/test16.jpg?imageView2/2/format/webp">-->
        <!--<img data-src="http://covteam.u.qiniudn.com/test16.jpg?imageView2/2/format/webp"><img data-src="http://covteam.u.qiniudn.com/test16.jpg?imageView2/2/format/webp">-->
        <!--<img data-src="http://covteam.u.qiniudn.com/test16.jpg?imageView2/2/format/webp">-->
        <!--</div>-->
        <router-link to="/page2" tag="li">page2</router-link>

        <!--</div>-->
        <div :class="classObject" >ss</div>

        <!--<child-2 :text="text" :count="count"></child-2>-->
        <child2 ref="child2"></child2>


        <button @click="send">send</button>

    </div>
</template>

<script>
import bus from './Bus'
    import Child1 from "./child-1";
    import Child2 from "./child-2";
    import {mixinTest} from "../mixin";
    export default {
        // mixins:[mixinTest],
        components: {
            Child2,
            Child1
        },
        name: "page1",
        data() {
            return {
                qwe: 'qq',
                count: 1234,
                msg: "",
                str: "",  // 加载页面后执行获取数据的方法，插入到此
                isFirstEnter: false, // 是否第一次进入，默认false
                active: true, err: true,
                userProfile: {
                    name: 'Anika'
                }
            };
        },
        provide(){
          return{
              haha:this.qwe
          }
        },
        computed: {
            classObject: function () {
                return {
                    active: this.active && !this.err,
                    'text-danger': this.err && this.err.type === 'fatal'
                }
            }
        },
        methods: {
            throttle(func, wait) {
                let last = 1
                let timer
                return function (...rest) {
                    const now = +new Date()
                    if (last && now - last < wait) {
                        clearTimeout(timer)
                        timer = setTimeout(() => {
                            last = now
                            func.apply(this, rest)
                        }, wait)
                    } else {
                        last = now
                        func.apply(this, rest)
                        clearTimeout(timer)
                    }
                }
            },
            getData() {
                // getData方法，模拟从后台请求数据
                console.warn("我调用第一个页面getData方法了");
                this.str = "我是通过调用方法加载的数据。。。";
            },
            goBack() {
                this.$router.go(-1);
            },
            send(){
                // this.$nextTick(()=>{
                //     bus.$emit('qq',123)
                // })
                // this.$router.replace({path: '/page2'})
                bus.$emit('qq',123)

            },
            getTQ(){
                let data= new URLSearchParams({
                    staId:54527
                })
                this.$http.post('/tqapi/weatherGis/web/weather/weatherFcst/getCurrentCondition', data)
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }

        },
        beforeRouteEnter(to, from, next) {
            console.log("我是第一个页面的beforeRouteEnter方法");
            // 路由导航钩子，此时还不能获取组件实例 `this`，所以无法在data中定义变量（利用vm除外）
            // 参考 https://router.vuejs.org/zh-cn/advanced/navigation-guards.html
            // 所以，利用路由元信息中的meta字段设置变量，方便在各个位置获取。这就是为什么在meta中定义isBack
            // 参考 https://router.vuejs.org/zh-cn/advanced/meta.html
            if (from.name == 'page2') {
                to.meta.isBack = true;
                //判断是从哪个路由过来的，如果是page2过来的，表明当前页面不需要刷新获取新数据，直接用之前缓存的数据即可
            }

            next();
        },
        created() {
            console.log("我是第一个页面的 created 方法");
            this.isFirstEnter = true;
            // 只有第一次进入或者刷新页面后才会执行此钩子函数
            // 使用keep-alive后（2+次）进入不会再执行此钩子函数

        },
        inheritAttrs: false,
        created(){

        },
        mounted() {
            this.getTQ()
            this.$refs.child2.footer = [3,4];
            console.log(this.$refs.child2)
            console.log("我是第一个页面的 mounted 方法");
            // bus.$emit('qq',123)
            // this.msg = sessionStorage.getItem('a');
            // this.userProfile = Object.assign({}, this.userProfile, {
            //     age: 17,
            //     ssasa: 2121
            // })
            // // console.log(this.userProfile)
            // const task = this.throttle(()=>console.log(1),1000)
            // // const task = this.throttle(()=>alert(1),1000)
            //
            // setTimeout(task,500)
            // setTimeout(task,1000)
            // setTimeout(task,2000)

        },
        activated() {
            console.log("我是第一个页面的 activated 方法");
            if (!this.$route.meta.isBack || this.isFirstEnter) {
                // 如果isBack是false，表明需要获取新数据，否则就不再请求，直接使用缓存的数据
                // 如果isFirstEnter是true，表明是第一次进入此页面或用户刷新了页面，需获取新数据
                this.str = ''// 把数据清空，可以稍微避免让用户看到之前缓存的数据
                this.getData();
            }
            // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
            this.$route.meta.isBack = false
            // 恢复成默认的false，避免isBack一直是true，导致每次都获取新数据
            this.isFirstEnter = false;

        },
        deactivated() {
            console.log("我是第一个页面的 deactivated 方法");
            sessionStorage.setItem('a', this.msg)

        },
        beforeDestroy() {

            console.log("我是第一个页面的 destroyed 方法");
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
