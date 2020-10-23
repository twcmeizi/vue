;(function(){
    const template=`<div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>工资</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
       <home-item v-for="(emp,index) in empList" :emp="emp" :index="index" :deleteEmp="deleteEmp"></home-item>
        
      </tbody>
    </table>
  </div>`
  window.HomeList={
    template,
    props:{
      empList:Array,
      deleteEmp:Function
    },
    components:{
      HomeItem
    }
  }
})()