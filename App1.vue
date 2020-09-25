<template>
  <div id="app">
    <button v-on:click="run()">执行方法的第一种</button>
    <button @click="run2()">执行方法的第二种</button>
    <button @click="getMsg()">获取data里面的数据</button>
    <button @click="setMsg()">改变data里面的数据</button>
    <button @click="requestData()">请求数据</button>
    <ul>
        <li v-for="(item,key) in list">{{key}}---{{item}}</li>
    </ul>
    <button @click="deleData('111')">执行方法传值</button>
    <button data-aid='13' @click="eventFn($event)">执行方法传值</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
        msg:'对方对方的',
        list:[]
    };
  },
  methods: {
    run() {
      alert("执行run方法");
    },
    run2() {
      alert("执行run2方法");
    },
    getMsg(){
      alert(this.msg)
    },
    setMsg(){
      this.msg='我是改变后的msg'
      alert(this.msg)
    },
    requestData(){
        for(var i=0;i<10;i++){
            this.list.push('我是第'+i+'条数据')
        }
    },
    deleData(val){
        alert(val)
    },
    eventFn(e){
        console.log(e)
        //srceElement,dom节点
        e.srceElement.style.background='red'
        // 获取自定义属性的值
        alert(e.srceElement.dataset.aid)
    }
  },
};
</script>

<style lang="scss">
</style>
