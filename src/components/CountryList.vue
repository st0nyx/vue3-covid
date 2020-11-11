<template>
  <div>
    <CountryTable/>
<!--    <CountryCard v-for="country in countries" :key="country.id" :country="country" />-->
  </div>
</template>

<script>
// import CountryCard from "@/components/CountryCard";
import CountryTable from "@/components/CountryTable";
// import axios from "axios";
export default {
  components: {
    // CountryCard,
    CountryTable
  },
  data() {
    return {
      countries: []
    };
  },
  // mounted() {
  //   axios.get("https://disease.sh/v3/covid-19/countries").then(response => {
  //     this.countries = response.data;
  //     console.log(response.data)
  //   });
  // }
};
</script>

<style scoped></style>
