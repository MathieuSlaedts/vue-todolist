<template>
  <div class="todoslist">
    <div class="container">
      <ul class="todos" v-if="todos">
        <li
          v-for="todo in todos"
          :key="todo.id"
          class="todo"
          :class="{ 'todo-done': todo.datas.done }">
          <input type="checkbox" :checked="todo.datas.done" @change="editTodo(todo)" />
          <p>{{ todo.datas.title }}</p>
          <button @click="deleteTodo(todo)">
            <img src="../assets/delete.png" alt="Delete" />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListTodos",
  mounted() {
    this.$store.dispatch("allTodos");
  },
  data() {
    return {};
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    },
  },
  methods: {

    deleteTodo(todo) {
      this.$store.dispatch("deleteTodo", todo.id);
    },
    
    editTodo(todo) {
      //console.log("todo", todo.id, "new done", !todo.datas.done)
      this.$store.dispatch("editTodo", { todoId: todo.id, newTodoDone: !todo.datas.done } );
    },
  },
};
</script>

<style lang="scss">
.todoslist {
  padding: 2rem 0;
}

.todos {
  border: 1px solid #ddd;
  border-radius: 5px;
}

.todo {
  display: flex;
  padding: 1rem;
  position: relative;

  input {
    position: absolute;
    left: 1rem;
    top: 50%;
    margin-top: -0.5rem;
    width: 1rem;
    height: 1rem;
  }

  p {
    @include reset-block;
    margin-right: auto;
    margin-left: 1.8rem;
    line-height: 1.5rem;
    height: 1.5rem;
  }

  button {
    @include reset-block;
    width: 1.5rem;
    height: 1.5rem;

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}

.todo + .todo {
  border-top: 1px solid #ddd;
}

input:checked + p {
  text-decoration: line-through;
}
</style>
