import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        peoples: "",
    },
    getters: {
        peoples(state) {
            return state.peoples;
        },
    },
    mutations: {
        allPeoples(state, peoples) {
            console.log(state.peoples);
            state.peoples = [...peoples];
        },
        deletePeople(state, id) {
            state.peoples.splice(id, 1);
        },
        addNewPeople(state, people) {
            console.log(state.peoples);
            console.log(people);
            state.peoples.push(people);
        },
        editPerson(state, people) {
            const datas = people.personDatas;
            console.log(state.peoples);
            for (const property in datas) {
                console.log(`${property}: ${datas[property]}`);
                state.peoples[people.index][property] = datas[property];
            }
        },
    },
    actions: {
        fetchPeoples(context) {
            Axios.get("http://localhost:9000/api/peoples").then((res) => {
                context.commit("allPeoples", res.data);
                //console.log(context.state.peoples);
            });
        },

        addNewPeople(context, people) {
            console.log(people);
            Axios.post("http://localhost:9000/api/peoples", people).then(() => {
                context.commit("addNewPeople", people);
            });
        },

        deletePeople(context, people) {
            Axios.delete("http://localhost:9000/api/peoples/" + people.id).then(
                () => {
                    //console.log(res.data);
                    //context.commit("allPeoples", res.data);
                    context.commit("deletePeople", people.index);
                }
            );
        },

        editPerson(context, people) {
            context.commit("editPerson", people);
            Axios.put(
                "http://localhost:9000/api/peoples/" + people.id,
                people.personDatas
            ).then(() => {
                context.commit("editPerson", people);
            });
        },
    },
    modules: {},
});