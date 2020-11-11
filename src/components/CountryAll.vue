<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="2" class="sidebar">
          <v-flex>
            <v-card align="center" width="400" class="mx-auto mt-5">
              <v-card-title>Last Update</v-card-title>
              <v-card-subtitle>
                <h1>
                  {{ moment(countries.updated).fromNow() }}
                </h1>
              </v-card-subtitle>
            </v-card>
          </v-flex>
          <v-divider class="mt-5"></v-divider>
          <v-flex>
            <v-card align="center" width="400" class="mx-auto mt-5">
              <v-card-title>All Cases</v-card-title>
              <v-card-subtitle>
                <h1 align="center">
                  <div>{{ formatNumber(countries.cases) }}</div>
                </h1>
              </v-card-subtitle>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card align="center" width="400" class="mx-auto mt-5">
              <v-card-title>Total Deaths</v-card-title>
              <v-card-subtitle>
                <h1 align="center">
                  <div>{{ formatNumber(countries.deaths) }}</div>
                </h1>
              </v-card-subtitle>
            </v-card>
          </v-flex>
          <v-divider class="mt-5"></v-divider>

          <v-flex>
            <v-card align="center" width="400" class="mx-auto mt-5">
              <v-card-title>Todays New Cases</v-card-title>
              <v-card-subtitle>
                <h1 align="center">
                  <div>{{ formatNumber(countries.todayCases) }}</div>
                </h1>
              </v-card-subtitle>
            </v-card>
          </v-flex>

          <v-flex>
            <v-card align="center" width="400" class="mx-auto mt-5">
              <v-card-title>Todays Deaths</v-card-title>
              <v-card-subtitle>
                <h1 align="center">
                  <div>{{ formatNumber(countries.todayDeaths) }}</div>
                </h1>
              </v-card-subtitle>
            </v-card>
          </v-flex>
          <v-divider class="mt-5"></v-divider>

          <v-flex>
            <v-card align="center" width="400" class="mx-auto mt-5">
              <v-card-title>Serious or Critical Cases</v-card-title>
              <v-card-subtitle>
                <h1>{{ formatNumber(countries.critical) }}</h1>
              </v-card-subtitle>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card align="center" width="400" class="mx-auto mt-5">
              <v-card-title>Population</v-card-title>
              <v-card-subtitle>
                <h1>{{ formatNumber(countries.population) }}</h1>
              </v-card-subtitle>
            </v-card>
          </v-flex>
        </v-col>
        <v-col cols="10">
          <h3>**** Click on play buttons to see animations in action ****</h3>
          <iframe
            src="https://ourworldindata.org/coronavirus-data-explorer?yScale=log&zoomToSelection=true&time=2020-02-15..2020-02-26&country=USA~GBR~BRA~DEU~ITA~CHE~BEL~FRA&region=World&casesMetric=true&interval=smoothed&aligned=true&perCapita=true&smoothing=7&pickerMetric=location&pickerSort=asc"
            loading="lazy"
            style="width: 100%; height: 600px; border: 0px none;"
          ></iframe>
          <iframe
            src="https://ourworldindata.org/grapher/covid-deaths-per-million-vs-days-since-exemplar?minPopulationFilter=5000000&time=earliest..2020-02-27&country=CHE~SWE~FRA~DEU~ITA~ESP~BEL"
            loading="lazy"
            style="width: 100%; height: 600px; border: 0px none;"
          ></iframe>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// import axios from "axios";
import AllService from "@/services/AllService";
// import CountryAllCharts from "@/components/CountryAllCharts";
import { format } from "date-fns";
import moment from "moment";

export default {
  components: {
    // CountryAllCharts
  },
  data() {
    return {
      format: format,
      moment,
      countries: []
    };
  },
  methods: {
    formatNumber(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    formatNumber2(value) {
      let val = (value / 1).toFixed(3).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  mounted() {
    AllService.getCountries().then(response => {
      this.countries = response.data;
    });
  },
  computed: {
    deathRate() {
      return (this.countries.deaths * 100) / this.countries.cases;
    },
    infectedRate() {
      return (this.countries.cases * 100) / this.countries.population;
    },
    topDeathRate() {
      return "";
    }
  }
};
</script>

<style scoped>
.sidebar {
  background: bisque;
}
</style>
