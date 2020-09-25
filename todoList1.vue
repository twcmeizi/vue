<template>
  <div id="app">
    <input type="text" v-model="todo" @keydown='doAdd($event)'/>
    <button @click="doAdd()">+增加</button>
    <br />
    <hr />
    <h2>进行中</h2>
    <ul>
      <li v-for="(item, key) in list" v-if='!item.bool'>
        <input type="checkbox" v-model="item.bool" @change='saveList()'/> 
        {{ item.title }}----
        <button @click="deleteList(key)">删除</button>
      </li>
    </ul>
    <h2>已完成</h2>
    <ul>
      <li v-for="(item, key) in list" v-if='item.bool'>
        <input type="checkbox" v-model="item.bool"  @change='saveList()'/> 
        {{ item.title}}----
        <button @click="deleteList(key)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import storage from './model/storage.js'
export default {
  name: "app",
  data() {
    return {
      todo: "",
      list: [
        { title: "dfdf", bool: false },
        { title: "dfdf", bool: true },
      ],
    };
  },
  methods: {
    doAdd(e) {
        console.log(e.keyCode)
        if(e.keyCode==13){  
            //获取文本框输入的值 2.把文本框的值push到list里面
            this.list.push({
                title:this.todo,
                bool:false
            });
            this.todo = "";
            storage.set('list',this.list)
        }
    
      
      
    },
    deleteList(key) {
      this.list.splice(key, 1);
      storage.set('list',this.list)
    },
    saveList(){
         storage.set('list',this.list)
    }
   
  }, 
  mounted(){//vue页面刷新就会触发的方法
    var list=storage.get('list')
    if(list){
        this.list=list
    }

  }
};
</script>

<style lang="scss">
</style>
