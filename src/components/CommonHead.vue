<template>
  <div class="todo-container">
    <div class="todo-header">
      <input type="text" v-model.trim="inputTxt" />
      <button @click="addTodo">新增</button>
    </div>
    <div class="todo-list">
      <div class="todo zanwu" v-if="todos.length === 0">暂无待办事项</div>
      <transition-group name="ani">
        <div
          :class="[
            'todo',
            {
              done: todo.done,
              undone: !todo.done,
            },
          ]"
          v-for="(todo, index) in todos"
          :key="index"
        >
          <span>{{ todo.content }}</span>
          <div class="actions">
            {{ index }}
            <button @click="delTodo(index)">删除</button>
            <button @click="setTodoDone(index)" :disabled="todo.done">
              {{ todo.done ? "已完成" : "点击完成" }}
            </button>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputTxt: "",
      todos: [
        {
          content: "明天去打针",
          done: false,
        },
        {
          content: "周末团建",
          done: true,
        },
        {
          content: "xxxxxx",
          done: false,
        },
      ],
    };
  },
  methods: {
    // 设置待办事项已完成
    setTodoDone(index) {
      this.todos[index].done = true;
    },
    // 新增待办事项
    addTodo() {
      console.log(this);
      if (this.inputTxt === "") {
        return false;
      }
      this.todos.push({
        content: this.inputTxt,
        done: false,
      });
      this.inputTxt = ""; // 清空input value
    },
    // 删除待办事项
    delTodo(index) {
      if (confirm("此操作会彻底删除待办事项,继续吗?")) {
        this.todos.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
.todo-container {
  width: 600px;
  padding: 15px;
  border: 1px solid #666;
  border-radius: 10px;
  margin: 20px auto;
}
.todo-header {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #666;
  margin-bottom: 20px;
  padding-bottom: 10px;
}
.todo-header input {
  flex: 1;
  height: 80%;
  margin-right: 10px;
  border-radius: 5px;
}

.todo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
.todo.zanwu {
  text-align: center;
  line-height: 50px;
  justify-content: center;
}
.todo.done {
  background-color: #a39f9f;
  color: #fafafa;
}
.todo.undone {
  background-color: #de4c4c;
}
.ani-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.ani-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.ani-enter-active,
.ani-leave-active {
  transition: all 1s;
}
</style>
