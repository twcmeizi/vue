<template>
  <!-- vue的模板里面所有的内容要被一个根节点包含起来 -->
  <div id="app">
    <h2>你好，vue{{ msg }}</h2>
    <ul>
      <!-- 循环数组 -->
      <li v-for="item in list1">
        {{ item.title }}
      </li>
    </ul>
    <!-- 绑定属性 -->
    <div v-bind:title="msg">绑定属性</div>
    <!-- 绑定属性简写 -->
    <div :title="msg">绑定属性</div>
    {{ h }}
    <!-- 绑定html -->
    <div v-html="h"></div>
    <!-- 绑定数据 -->
    {{ msg }}
    <!-- 绑定数据的另一种方法 -->
    <div v-text="msg"></div>
    <!-- 循环数据，第一个高亮，绑定style -->
    <ul>
      <li v-for="(item, key) in list" :class="{ red: key == 0 }">
        {{ item }}
      </li>
    </ul>
    <div class="box" :style="{ width: boxWidth + 'px' }">我是另一个div</div>
    <!-- v-bind:class  :class的使用 -->
    <div v-bind:class="{ red: flag }">我是一个div</div>
    <div v-bind:class="{ red: flag, blue: !flag }">我是另一个div</div>
    <!-- 数据双向绑定 -->
    <h2>双向数据{{msg}}</h2>
    <input type="text" v-model="msg" />
    <button v-on:click='getMsg()'>获取表单数据</button>
    <button v-on:click='setMsg()'>设置表单数据</button>
    <br>
    <!-- ref获取dom节点 -->
    <input type="text" ref="userinfo">
    <button v-on:click='getMsg2()'>设置第二个表单数据</button>
  </div>
</template>

<script>
/*
  双向数据绑定 MVVM vue就是一个MVVM的框架
  M Model
  V view
  MVVM:model改变会影响视图view,view视图改变反过来影响model
  双向数据绑定必须在表单里面使用
*/ 

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      list: ["111", "222"],
      list1: [
        { title: "dfdfd" },
        { title: "dfdfd" },
        { title: "dfdfd" },
        { title: "dfdfd" },
      ],
      h: "<h2>我是h2</h2>",
      flag: false,
      boxWidth: 300,
    };
  },
  methods:{
    getMsg(){
      alert(this.msg)
      // 获取data里面的数据
    },
    setMsg(){
      this.msg='我是改变后的msg'
    },
    getMsg2(){
      // 获取ref定义的dom节点
      console.log(this.$refs.userinfo,this.$refs.userinfo.value)
    }
  }
};
</script>

<style lang="scss">
.red {
  color: red;
}
.blue {
  color: blue;
}
.box {
  width: 100px;
  height: 100px;
  background: red;
}
</style>
