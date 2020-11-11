import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CountryTable from "@/components/CountryTable";
import Vaccine from "@/views/Vaccine";
import Therapeutics from "@/views/Therapeutics";
import CountryAllCharts from "@/components/CountryAllCharts";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/vaccine",
    name: "Vaccine",
    component: Vaccine
  },
  {
    path: "/therapeutics",
    name: "Therapeutics",
    component: Therapeutics
  },
  {
    path: "/allcharts",
    name: "allcharts",
    component: CountryAllCharts
  },
  {
    path: "/country-table",
    name: "country-table",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CountryTable
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
