<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <p v-for="(company, index) in companies" :key="index">
    <router-link
      :to="{
        name: 'EmployeeRecord',
        params: { companyId: company.id, companyName: company.name },
      }"
      >{{ company.name }}</router-link
    >
  </p>
</template>

<script>
import CompanyRecordService from "../services/company-record-service";
export default {
  name: "CompanyRecord",
  props: {
    msg: String,
  },
  data() {
    return {
      companies: new CompanyRecordService().getCompanies(),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
