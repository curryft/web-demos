<template>
    <div>
        {{demo}}
        <!--{{this.$attrs.text}}-->
        <!--<child-1 v-bind="this.$attrs"></child-1>-->
        <!--<child-1></child-1>-->
    </div>
</template>

<script>
    import Child1 from "./child-1";

    export default {
        components: {Child1},
        name: "child-2",
        inject:['haha'],
        inheritAttrs:false,
        data(){
            return{
                demo:this.haha,
                footer:[1,2]
            }
        },
        mounted(){
            console.log(this.haha);
        }
    }
</script>

<style scoped>

</style>
