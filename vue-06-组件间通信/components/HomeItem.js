;(function(){
    const template=`
    <tr >
    <td>{{emp.id}}</td>
    <td>{{emp.name}}</td>
    <td>{{emp.salary}}</td>
    <td><a href="#" @click="deleteItem">删除</a></td>
  </tr>`
  window.HomeItem={
      template,
      props:{
          emp:{
              type:Object,
              required:true
          },
          index:Number,
          deleteEmp:Function
      },
      methods: {
        deleteItem(){
            if(window.confirm(`确定删除${this.emp.name}的记录吗？`)){
                this.deleteEmp(this.index)
            }
            
        }
      },
  }
})()