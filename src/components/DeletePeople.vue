<template>
  <button @click.prevent="deletePeople(peopleid)" class="delete-people">
    Supprimer cette personne {{ peopleid }}
  </button>
</template>

<script>
export default {
  name: "DeletePeople",
  data() {
    return {};
  },
  props: {
    peopleid: String,
  },
  methods: {
    deletePeople(peopleid) {
      this.$store.commit("deletePeople", peopleid);
    },
  },
};
</script>

<style lang="scss"></style>
