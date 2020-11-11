<template>
  <div>
    <v-footer color="primary lighten-1" padless>
      <v-layout justify-center wrap>
        <v-btn
          v-for="link in links"
          :key="`${link.label}-footer-link`"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.url"
        >
          {{ link.label }}
        </v-btn>
        <v-flex lighten-2 py-4 text-center white--text xs12>
          {{ new Date().getFullYear() }} — <strong>Covid-19 Live</strong> / developed by Bruno Steinmann
        </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          label: "Home",
          url: "/"
        },
        {
          label: "Countries",
          url: "/country-table"
        },
        {
          label: "Vaccine",
          url: "/vaccine"
        },
        {
          label: "Therapeutics",
          url: "/therapeutics"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
