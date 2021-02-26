<template>
  <div class="hello">
    <h1>Mitarbeiter von {{ companyName }}</h1>
  </div>
  <p v-for="(employee, index) in employees" :key="index">
    {{ employee.surname + " " + employee.forename }} {{ employee.email }}
  </p>
  <router-link
    :to="{
      name: 'AddEmployee',
      params: { companyId: companyId, companyName: companyName },
    }"
    >Mitarbeiter hinzufügen</router-link
  >
</template>

<script>
import CompanyRecordService from "../services/company-record-service";
export default {
  name: "EmployeeRecord",
  props: {
    companyId: String,
    companyName: String,
  },
  data() {
    return {
      employees: new CompanyRecordService().getEmployeesByCompanyId(
        this.companyId
      ),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
