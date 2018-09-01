<template>
    <div class="animated" :class="classObject"  :id="this.id" :style="{visibility:isshow1}">
    <!--<div  style="display: inline-block" :id="this.id">-->
        <slot></slot>
    </div>
    <!--</div>-->
</template>

<script>
    export default {
        name: "scroll",
        data(){
            return{
                classNameq:'',
                isshow:false,
                isshow1:'hidden'
            }
        },
        methods:{
            handleScroll(){
                //滚动条高度+视窗高度 = 可见区域底部高度
                var visibleBottom = window.scrollY + document.documentElement.clientHeight;//733-1023
                //可见区域顶部高度
                var visibleTop = window.scrollY;//0-290
                //元素的中心纵坐标
                var animate = document.getElementById(this.id);
                let RealTop = animate.getBoundingClientRect().top + animate.getBoundingClientRect().height/2;//633-923
                console.log('top'+visibleTop);
                console.log('bot'+visibleBottom);
                console.log('real'+RealTop);
                if(RealTop>visibleTop&&RealTop<visibleBottom){
                    // animate.setAttribute('class','animated zoomInDown')
                    this.isshow = true;
                    this.isshow1 = 'visible'
                    // $(`#${this.id}`).addClass('animated '+this.animateName)


                }
            }
        },
        computed:{
            classObject:function () {
                if(this.isshow == true){
                    return this.animateName;
                }
            }
        },
        props:{
            id: {  // 必须提供字段
                required: true
            },
            animateName: {
                required: true
            },
            duration: {
                default:1+'s'
            },
            delay: {
                default:0.3+'s'
            },
        },
        mounted(){
            window.addEventListener('scroll',this.handleScroll)
            // this.classNameq = this.animateName;
            let _this = this;
            if(this.duration!=undefined){
                $(`#${this.id}`).css({animationDuration :this.duration+'s'})
            }else {

            }
            if(this.delay!=undefined){
                $(`#${this.id}`).css({animationDelay:this.delay+'s'})
            }else {

            }


        }
    }
</script>

<style scoped>
.fadeIn{
    /*animation-duration :1s;*/
    /*animation-delay: 1s;*/
}
</style>
