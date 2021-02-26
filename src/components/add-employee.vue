<template>
  <div>
    <form @submit="addEmployee">
      <input type="text" placeholder="Vorname" />
      <input type="text" v-model="surname" placeholder="Nachname" />
      <input type="text" placeholder="Email" />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
import uuid from "uuid";

export default {
  name: "AddEmployee",
  data() {
    ""
  },
  methods: {
    addEmployee(e) {
        e.preventDefault();
      const newEmployee = {
        id: uuid.v4(),
        surname: this.surname,
      };
    },
  },
};
    this.$emit('add-employee', newEmployee);
    this.surname = '';
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: auto;
}
</style>>

</style>
