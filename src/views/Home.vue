<template>
  <div class="home">
    <h1 class="title is-2">Todo List</h1>
    <add-todo></add-todo>
    <list-todos></list-todos>
  </div>
</template>

<script>
// @ is an alias to /src
import AddTodo from "@/components/AddTodo.vue";
import ListTodos from "@/components/ListTodos.vue";

export default {
  name: "Home",
  components: {
    "add-todo": AddTodo,
    "list-todos": ListTodos,
  },
};
</script>

<style lang="scss" scoped></style>
