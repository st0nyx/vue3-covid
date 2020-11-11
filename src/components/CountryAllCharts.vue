<template>
  <div id="app">
    <line-chart v-if="countries" :data="countries.cases"></line-chart>
    <line-chart v-if="countries" :data="countries.deaths"></line-chart>

  </div>
</template>

<script>
import AllServiceCharts from "@/services/AllServiceCharts";
// import AllService from "@/services/AllService";
export default {
  name: "Allcharts",
  data() {
    return {
      result: null,
      countries: []
    };
  },
  mounted() {
    AllServiceCharts.getCountries().then(response => {
      this.countries = response.data;
    });
  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.chart {
  width: 100px;
}
</style>
