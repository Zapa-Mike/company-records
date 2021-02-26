<template>
  <CompanyRecord msg="Company Record" />
</template>

<script>
import CompanyRecord from "../components/company-record.vue";

export default {
  name: "Home",
  components: {
    CompanyRecord,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 50px;
}
</style>
