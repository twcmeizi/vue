<template>
    <div id="home">
        <h2> {{msg}}</h2>
        <button @click="run()">run</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:'home.vue'
        }
    },
    methods:{
        run(){
            alert(this.msg)
        }
    }
}
</script>
<style lang="scss" scoped>
#home{
    h2{color: red;}
}
</style>


//<style lang="scss" scoped>
//     h2{color: red;}scoped是局部作用域
// </style>