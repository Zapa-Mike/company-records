<template>
  <div>
    <form @submit="addEmployee">
      <input required type="text" name="forename" placeholder="Vorname" />
      <input required type="text" name="surname" placeholder="Nachname" />
      <input type="email" name="email" placeholder="E-Mail" />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
import CompanyRecordService from "../services/company-record-service";

export default {
  name: "AddEmployee",
  props: {
    companyId: String,
    companyName: String,
  },
  methods: {
    async addEmployee(elements) {
      elements.preventDefault();
      const newEmployee = {
        forename: elements.target.elements.forename.value,
        surname: elements.target.elements.surname.value,
        email: elements.target.elements.email.value,
      };
      var service = new CompanyRecordService();
      service
        .addEmployee(this.$route.params.companyId, newEmployee)
        .then(() => {
          this.$router.push({
            name: "EmployeeRecord",
            params: {
              companyId: this.$route.params.companyId,
              companyName: this.$route.params.companyName,
            },
          });
        });
    },
  },
};
</script>

<style scoped>
form {
  display: inline-grid;
  margin: 0 auto;
}
input[type="text"] {
  flex: 10;
  padding: auto;
}
</style>>
