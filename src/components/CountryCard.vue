<template>
  <div>
    <v-card>
      <h1>{{ country.country }}</h1>
      <v-card-title>{{ country.cases }}</v-card-title>
      <v-card-subtitle>{{ country.deaths }}</v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    country: Object
  }
};
</script>

<style scoped></style>
