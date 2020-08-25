<template>
  <div class="home">
    <hr />
    <AddPeople></AddPeople>
    <hr />
    <ListPeoples></ListPeoples>
  </div>
</template>

<script>
// @ is an alias to /src
import AddPeople from "@/components/AddPeople.vue";
import ListPeoples from "@/components/ListPeoples.vue";

export default {
  name: "Home",
  components: {
    AddPeople,
    ListPeoples,
  },
};
</script>
