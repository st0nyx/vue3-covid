<template>
  <v-container class="home">
    <h1>Covid-19 News</h1>
    <v-btn text rounded>
      <router-link to="/country-table">Countries</router-link>
    </v-btn>
    <v-btn text rounded>
      <router-link to="/vaccine">Vaccine News</router-link>
    </v-btn>
    <v-btn text rounded>
      <router-link to="/therapeutics">Therapeutic News</router-link>
    </v-btn>
    <CountryAll />
    <!--    <CountryTable />-->
  </v-container>
</template>

<script>
// @ is an alias to /src
// import CountryList from "@/components/CountryList";
// import CountryTable from "@/components/CountryTable";
import CountryAll from "@/components/CountryAll";
export default {
  name: "Home",
  components: {
    // CountryTable,
    CountryAll
  }
};
</script>
