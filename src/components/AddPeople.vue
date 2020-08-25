<template>
  <div class="add-people">
    formulaire pour ajouter une personne
    <form @submit.prevent="addNewPeople">
      <input type="text" placeholder="firstname" ref="firstname" />
      <input type="text" placeholder="lastname" ref="lastname" />
      <button>Ajouter tttttt</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddPeople",
  data() {
    return {};
  },
  methods: {
    addNewPeople() {
      let newP = {};
      for (const property in this.$refs) {
        newP[`${property}`] = this.$refs[property].value;
      }
      this.$store.dispatch("addNewPeople", newP);
    },
  },
};
</script>

<style lang="scss"></style>
