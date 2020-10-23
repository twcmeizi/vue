; (function () {
    const template = `<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        
    <!--右边上半区域-->
    <!--<h1 class="page-header">Dashboard</h1>-->
        <!--定义插槽-->
        <slot name="dashboard"></slot>
        <!--通过属性绑定的方式向子组件传递数据
            @自定义事件名=事件监听函数        
            在子组件 dashboard 中触发 了 delete_hobby 事件来调用 deleteHobby 函数
        -->
        <dashboard :hobbies="hobbies" @delete_hobby="deleteHobby"></dashboard>
    <!--右边下半区域-->
        <h2 class="sub-header">Section title</h2>
        <home-list :empList="empList" :deleteEmp="deleteEmp"></home-list>

      </div>`

    window.AppHome = {
        template, // template: template,

        data() { // alt+shift 
            return {
                hobbies: ['coding', '睡觉', '打豆豆', '看书'],
                empList: []
            }
        },
       // F:\前端学习资料\vue\vuedemo\vue-08-router\02-bootstrap-ajax-router
        created() {
            axios.get('http://localhost:52330/f:/%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%96%99/vue/vuedemo/vue-08-router/02-bootstrap-ajax-router/emp.json')
                .then(response => {//function (response) {
                    console.log(response.data, this);
                    this.empList = response.data
                })
                .catch(error => {//function (error) {
                    alert(error.message)
                })
        },

        methods: {
            // 删除某个员工
            // 因为删除 emp 会对 empList 做更新操作
            // 而这个 empList 初始化在当前组件中，所以删除 的函数需要定义在这个组件里面
            deleteEmp(index) {
                this.empList.splice(index, 1)
            },
            deleteHobby(index) {
                this.hobbies.splice(index, 1)
            }
        },

        components: { //Dashboard 作为AppHome 的子组件
            Dashboard, // Dashboard: Dashboard
            HomeList // HomeList:HomeList
        }
    }
})()