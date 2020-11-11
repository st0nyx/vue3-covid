<template>
  <div>
    <v-container>
      <h2>All about Vaccines</h2>
      <h3>Total Number of Candidates: {{ vaccines.totalCandidates }}</h3>
      <p></p>
      <v-card>
        <v-data-table
          class="elevation-1"
          :headers="headers"
          :items="vaccines.phases"
          :items-per-page="10"
        ></v-data-table>
      </v-card>
      <v-divider></v-divider>
      <p></p>
      <h3>Vaccine Info by Candidate</h3>

      <v-card>

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
          class="elevation-1"
          fixed-header
          height="800px"
          :headers="headers2"
          :items="vaccines.data"
          :items-per-page="100"
          :search="search"
        ></v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import VaccineService from "@/services/VaccineService";
export default {
  components: {},
  data() {
    return {
      search: "",
      vaccines: {},
      vaccine: {},
      headers: [
        {
          text: "State of Phase",
          value: "phase"
        },
        {
          text: "No. of Candidates",
          value: "candidates"
        }
      ],
      headers2: [
        {
          text: "Candidate",
          value: "candidate"
        },
        {
          text: "Mechanism",
          value: "mechanism"
        },
        {
          text: "Phase",
          value: "trialPhase"
        },
        {
          text: "Institutions",
          value: "institutions"
        },
        {
          text: "Details",
          value: "details"
        },
        {
          text: "Sponsors",
          value: "sponsors"
        }
      ]
    };
  },
  mounted() {
    VaccineService.getVaccines().then(response => {
      this.vaccines = response.data;
    });
  }
};
</script>

<style scoped>
.v-data-table >>> div > table {
  border-spacing: 0 1rem;
}
</style>
