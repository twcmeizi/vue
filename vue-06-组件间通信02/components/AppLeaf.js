;(function(){
    const template=`  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <li class="active">
      <a href="#">Overview <!--是否显示和显示总删除数--> 
      <span v-show="delNum">( {{ delNum }} )</span> </a>
      <a href="#">Overview <span class="sr-only">(current)</span></a></li>
      <li><a href="#">Reports</a></li>
      <li><a href="#">Analytics</a></li>
      <li><a href="#">Export</a></li>
    </ul>
    <ul class="nav nav-sidebar">
      <li><a href="">Nav item</a></li>
      <li><a href="">Nav item again</a></li>
      <li><a href="">One more nav</a></li>
      <li><a href="">Another nav item</a></li>
      <li><a href="">More navigation</a></li>
    </ul>
    <ul class="nav nav-sidebar">
      <li><a href="">Nav item again</a></li>
      <li><a href="">One more nav</a></li>
      <li><a href="">Another nav item</a></li>
    </ul>
  </div>`
  window.AppLeaf={
      template,
      data:function(){
        return{
          delNum:0
        }
      },
      created() {
        PubSub.subscribe('changeNum',(e,num)=>{
          this.delNum=this.delNum+num
        })
      },
  }
})()