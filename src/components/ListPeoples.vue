<template>
  <div class="list-peoples">
    <ul>
      <li v-for="(people, index) in peoples" :key="people.id">
        <p>{{ people.firstname }} {{ people.lastname }}</p>
        <div>
          <form @submit.prevent="editPerson(people.id, index)">
            <input type="text" placeholder="firstname" ref="firstname" />
            <input type="text" placeholder="lastname" ref="lastname" />
            <button>Editer</button>
          </form>
        </div>
        <button @click.prevent="editPerson(people.id, index)">
          Supprimer {{ people.id }}
        </button>
        <!-- <DeletePeople :peopleid="people.id"></DeletePeople> -->
      </li>
    </ul>
  </div>
</template>

<script>
//import DeletePeople from "@/components/DeletePeople.vue";
export default {
  name: "ListPeoples",
  created() {
    this.$store.dispatch("fetchPeoples");
  },
  data() {
    return {};
  },
  computed: {
    peoples() {
      return this.$store.getters.peoples;
    },
  },
  methods: {
    deletePeople(id, index) {
      this.$store.dispatch("deletePeople", { id, index });
    },
    editPerson(id, index) {
      let personDatas = {};
      for (const property in this.$refs) {
        personDatas[`${property}`] = this.$refs[property][index].value;
      }
      this.$store.dispatch("editPerson", { id, index, personDatas });
    },
  },
};
</script>

<style lang="scss"></style>
