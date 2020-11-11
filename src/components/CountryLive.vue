<template>
  <div>
    <v-card>
      <h3>Countries</h3>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="countries"
        :search="search"
        item-key="id"
      >
        <template slot="body.prepend">
          <tr class="pink--text">
            <th></th>
            <th class="title">Totals</th>
            <th class="title">{{ formatNumber(sumField("cases")) }}</th>
            <th class="title">{{ formatNumber(sumField("todayCases")) }}</th>
            <th class="title">{{ formatNumber(sumField("deaths")) }}</th>
            <th class="title">{{ formatNumber(sumField("todayDeaths")) }}</th>
<!--            <th class="title">{{ formatNumber(sumField("casesPerOneMillion")) }}</th>-->
<!--            <th class="title">{{ formatNumber(sumField("deathsPerOneMillion")) }}</th>-->
            <th></th>
            <th></th>
            <th class="title">{{ formatNumber(sumField("critical")) }}</th>
            <th class="title">{{ formatNumber(sumField("tests")) }}</th>
            <th class="title">{{ formatNumber(sumField("population")) }}</th>
          </tr>
        </template>
        <template v-slot:item="{ item }">
          <tr>
            <td>
              <v-img
                :src="item.countryInfo.flag"
                :alt="item.country"
                width="30px"
              ></v-img>
            </td>
            <td class="float-left">{{ item.country }}</td>
            <td>{{ formatNumber(item.cases) }}</td>
            <td>{{ formatNumber(item.todayCases) }}</td>
            <td>{{ formatNumber(item.deaths) }}</td>
            <td>{{ formatNumber(item.todayDeaths) }}</td>
            <td>{{ formatNumber(item.casesPerOneMillion) }}</td>
            <td>{{ formatNumber(item.deathsPerOneMillion) }}</td>
            <td>{{ formatNumber(item.critical) }}</td>
            <td>{{ formatNumber(item.tests) }}</td>
            <td>{{ formatNumber(item.population) }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import CountryService from "@/services/CountryService";
import { format } from "date-fns";

export default {
  components: {},
  data() {
    return {
      search: "",
      format: format,
      country: "",
      cases: 0,
      headers: [
        {
          text: "Flag",
          value: "countryInfo.flag"
        },
        {
          text: "Country",
          value: "country"
        },
        {
          text: "Cases",
          value: "cases"
        },
        {
          text: "Today Cases",
          value: "todayCases"
        },
        {
          text: "Deaths",
          value: "deaths"
        },
        {
          text: "Today Deaths",
          value: "todayDeaths"
        },
        {
          text: "Cases per Million",
          value: "casesPerOneMillion"
        },
        {
          text: "Deaths per Million",
          value: "deathsPerOneMillion"
        },
        {
          text: "Critical",
          value: "critical"
        },
        {
          text: "Tests",
          value: "tests"
        },
        {
          text: "Population",
          value: "population"
        }
      ],

      countries: []
    };
  },
  mounted() {
    CountryService.getCountries().then(response => {
      this.countries = response.data;
    });
  },
  methods: {
    sumField(key) {
      // sum data in give key (property)
      return this.countries.reduce((a, b) => a + (b[key] || 0), 0);
    },
    formatNumber(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  computed: {
    casesPopulation() {
      return this.countries.population / 100;
    }
  }

  // computed: {
  //   formattedDate() {
  //     return {
  //       moment(updated)
  //       .format('DD.MM.YY, h:mm:ss a');
  //
  //     }
  //   }
  // },
};
</script>

<style scoped></style>
