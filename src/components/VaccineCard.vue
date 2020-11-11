<template>
  <div>
    <v-card>
      <v-card-title>{{ vaccine.phase }}</v-card-title>
<!--      <v-card-title>{{ country.cases }}</v-card-title>-->
      <v-card-subtitle>No. of Candidates: {{ vaccine.candidates }}</v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    vaccine: {}
  }
};
</script>

<style scoped></style>
