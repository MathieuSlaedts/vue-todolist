<template>
  <div class="addtodo">
    <div class="container">
      <form @submit.prevent="addTodo" class="newtodo">
        <div class="field">
          <label class="label">New todo:</label>
          <input
            class="input"
            type="text"
            placeholder="New todo"
            ref="title"
            v-model="titleValue"
          />
          <button class="button is-primary" :disabled="isBtnDisabled">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      titleValue: "",
    };
  },
  computed: {
    isBtnDisabled() {
      return this.titleValue !== "" ? false : true;
    },
  },
  methods: {
    addTodo() {
      let newTodo = {};
      for (const property in this.$refs) {
        newTodo[`${property}`] = this.$refs[property].value;
      }
      newTodo["done"] = false;
      this.$store.dispatch("AddTodo", newTodo);

      this.titleValue = "";
    },
  },
};
</script>

<style lang="scss">
.newtodo {
  .field {
    display: flex;
    label {
      display: none;
    }
    input[type="text"] {
      width: 100%;
    }
    button {
      margin-left: 1rem;
    }
  }
}
</style>
