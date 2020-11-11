<template>
  <v-app>
    <NavBar />
    <!--    <v-app-bar app color="primary" dark>-->
    <!--      <div class="d-flex align-center">-->
    <!--        <v-img-->
    <!--          alt="Vuetify Logo"-->
    <!--          class="shrink mr-2"-->
    <!--          contain-->
    <!--          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"-->
    <!--          transition="scale-transition"-->
    <!--          width="40"-->
    <!--        />-->

    <!--        <v-img-->
    <!--          alt="Vuetify Name"-->
    <!--          class="shrink mt-1 hidden-sm-and-down"-->
    <!--          contain-->
    <!--          min-width="100"-->
    <!--          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"-->
    <!--          width="100"-->
    <!--        />-->
    <!--      </div>-->

    <!--      <v-spacer></v-spacer>-->

    <!--      <v-btn-->
    <!--        href="https://github.com/vuetifyjs/vuetify/releases/latest"-->
    <!--        target="_blank"-->
    <!--        text-->
    <!--      >-->
    <!--        <span class="mr-2">Latest Release</span>-->
    <!--        <v-icon>mdi-open-in-new</v-icon>-->
    <!--      </v-btn>-->
    <!--    </v-app-bar>-->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "App",

  components: {
    NavBar
  },

  data: () => ({
    //
  })
};
</script>

<style>
/*** TRANSITIONS ***/
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
