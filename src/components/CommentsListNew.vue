<template>
    <div>
        <div>
            <!--<div class="cube">-->
            <!--<div class="cube-face front"><img src="http://120.78.158.202/1.jpg"></div>-->
            <!--<div class="cube-face back"><img src="http://120.78.158.202/2.jpg"></div>-->
            <!--<div class="cube-face left"><img src="http://120.78.158.202/3.jpg"></div>-->
            <!--<div class="cube-face right"><img src="http://120.78.158.202/4.jpg"></div>-->
            <!--<div class="cube-face top"><img src="http://120.78.158.202/5.jpg"></div>-->
            <!--<div class="cube-face bottom"><img src="http://120.78.158.202/6.jpg"></div>-->
            <!--</div>-->
        </div>
        <ul>
            <li v-for="comment in comments" :key="comment.id">
                {{comment.body}}--{{comment.author}}
            </li>
        </ul>

    </div>
</template>
<script>
    export default {
        name: "comments-list-new",

        props: {
            comments: {
                type: Array,
                default() {
                    return [];
                },
                validator(comments) {
                    return comments.every(comment =>
                        'body' in comment &&
                        'author' in comment &&
                        'id' in comment
                    )
                },
                fetch: {
                    type: Function,
                    default: () => {
                    }
                }
            }
        },






        // computed:{
        //     commentss(){
        //         return this.$store.state.comments
        //     },
        // },
        mounted(){
            // this.$store.dispatch('fetchComments')
            this.fetch();
        },
    }
</script>

<style scoped>

</style>
