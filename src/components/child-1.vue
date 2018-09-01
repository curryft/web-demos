<template>
    <div>
        <!--{{this.$attrs.count}}-->
        {{demo}}
        <!--<child-2 :text="text"></child-2>-->
    </div>
</template>

<script>
    export default {
        name: "child-1",
        data(){
            return{
                // text:'孙子',
                // count:123456
                demo:this.haha
            }
        },
        inject:['haha'],
        mounted(){
            // console.log(222222)
        }
    }
</script>

<style scoped>

</style>
