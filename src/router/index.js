import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import EmployeeRecord from "../components/employee-record.vue";
import AddEmployee from "../components/add-employee.vue";

const routes = [
  {
    path: "/Companies",
    name: "CompanyRecord",
    component: () => import("../views/Home.vue"),
  },
  { path: "/", component: Home },
  {
    path: "/Companies/:companyId/:companyName/EmployeeRecord",
    component: EmployeeRecord,
    name: "EmployeeRecord",
    props: true,
  },
  {
    path: "/Companies/:companyId/:companyName/AddEmployee",
    component: AddEmployee,
    name: "AddEmployee",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
