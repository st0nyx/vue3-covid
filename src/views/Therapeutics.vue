<template>
  <div>
    <v-container>
      <h1>All about Therapeutics</h1>
      <h3>Total Number of Candidates: {{ therapeutics.totalCandidates }}</h3>

      <p></p>
      <v-card>
        <v-data-table
          class="elevation-1"
          :headers="headers"
          :items="therapeutics.phases"
          :items-per-page="10"
        ></v-data-table>
      </v-card>
      <v-divider></v-divider>
      <p></p>
      <h3>Therapeutic Info by Candidate</h3>

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
          :items="therapeutics.data"
          :items-per-page="100"
          :search="search"
        ></v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import TherapeuticService from "@/services/TherapeuticService";
export default {
  data() {
    return {
      search: "",
      therapeutics: {},
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
          text: "Medication Class",
          value: "medicationClass"
        },
        {
          text: "Trade Name",
          value: "tradeName"
        },
        {
          text: "Details",
          value: "details"
        },
        {
          text: "Researcher",
          value: "developerResearcher"
        },
        {
          text: "Sponsors",
          value: "sponsors"
        },
        {
          text: "Phase",
          value: "phase"
        },
        {
          text: "Last Update",
          value: "lastUpdate"
        }
      ]
    };
  },
  mounted() {
    TherapeuticService.getTherapeutics().then(response => {
      this.therapeutics = response.data;
    });
  }
};
</script>

<style scoped>
.v-data-table >>> div > table {
  border-spacing: 0 1rem;
}
</style>
