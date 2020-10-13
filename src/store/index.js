import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [],
    },
    getters: {
        todos(state) {
            return state.todos;
        },
    },
    mutations: {
        allTodos(state, todos) {
            // Firebase return an object with the ids as a keys of items
            // We transform this object in an array of objects
            // Each object has a key id and a key datas
            state.todos = [];
            for (const todo in todos) {
                state.todos.push({ id: todo, datas: todos[todo] });
            }
        },
    },
    actions: {
        allTodos(context) {
            Axios.get("https://todolist-847d1.firebaseio.com/todos.json").then(
                (res) => {
                    context.commit("allTodos", res.data);
                }
            );
        },

        AddTodo(context, newTodo) {
            console.log(newTodo);
            Axios.post("https://todolist-847d1.firebaseio.com/todos.json", newTodo).then(
                () => {
                    // Reload todos from db
                    // Refactoring: Find a way without refetching all datas 
                    context.dispatch("allTodos");
                }
            );
        },

        deleteTodo(context, todoId) {
            Axios.delete("https://todolist-847d1.firebaseio.com/todos/" + todoId + ".json").then(
                () => {
                    // Reload todos from db
                    // Refactoring: Find a way without refetching all datas 
                    context.dispatch("allTodos");
                }
            );
        },

        editTodo(context, { todoId, newTodoDone }) {
            Axios.patch("https://todolist-847d1.firebaseio.com/todos/" + todoId + ".json",{"done": newTodoDone}).then(
                () => {
                    // Reload todos from db
                    // Refactoring: Find a way without refetching all datas 
                    context.dispatch("allTodos");
                }
            );
        },
    },
});