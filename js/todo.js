(function(exports){
	'use strict';
	
	exports.mv = new Vue({				//创建一个Vue实例
		// 将编译根元素 
		//将实例挂载到DOM节点上
		// vm.$mount('.todoapp');
		el:'.todoapp',
		// 应用程序初始状态
		data: {						//实例的data属性管理数据信息
			todos: [],				//todos对象存放备忘录信息
			newTodo: '',			//newTodo数据默认为字符串
		},
		// 实现数据逻辑的方法
		// 注意这里根本没有DOM操作。
		methods: {
			addTodo: function () {		//添加新条目方法
				var value = this.newTodo && this.newTodo.trim();		//新条目（去掉newTodo前后空格）
				//如果新条目没内容，结束
				if(!value) {
					return;
				}		
				this.todos.push({		//存放新条目到todos对象
					//id增加1，id用来存key
					id: this.todos.length ? this.todos[this.todos.length-1].id++ : 1,
					title: value,		//存放新条目内容
					completed: false	//时候完成（默认没完成）
				});
				this.newTodo = '';		//将data里的新条目设空
			},
			removeTodo: function (todo) {		//增加一个removeTodo方法
				this.todos.splice(this.todos.indexOf(todo),1);	//删除todos下相应的条目
			}
		}
	});
	// vm.$mount('.todoapp');		//将实例挂载到DOM节点上
})(window);


