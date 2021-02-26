<template>
  <div class="hello">
    <h1>Mitarbeiter von {{ companyName }}</h1>
  </div>
  <ul>
    <li v-for="(employee, index) in employees" :key="index">
      {{ employee.name }}
    </li>
  </ul>
  <button>Mitarbeiter hinzufügen</button>
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
      employees: new CompanyRecordService().getEmployeesByCompanyId(companyId),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
