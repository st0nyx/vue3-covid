<template>
  <v-app>
    <div>
      <v-btn @click="selectedScreen = 'Live'" text rounded>Live</v-btn>
      <v-btn @click="selectedScreen = 'Yesterday'" text rounded
        >Yesterday</v-btn
      >
      <v-btn @click="selectedScreen = '2DaysAgo'" text rounded
        >2 Days Ago</v-btn
      >
    </div>
    <div v-if="selectedScreen === 'Live'">
      <transition name="fade" mode="out-in">
        <CountryLive />
      </transition>
    </div>

    <div v-if="selectedScreen === 'Yesterday'">
      <transition name="fade" mode="out-in">
        <CountryYesterday />
      </transition>
    </div>

    <div v-if="selectedScreen === '2DaysAgo'">
      <transition name="fade" mode="out-in">
        <Country2Days />
      </transition>
    </div>

    <!--<CountryAll v-if="selectedScreen ? 'Yesterday' : ''" />-->
  </v-app>
</template>

<script>
import CountryLive from "@/components/CountryLive";
import CountryYesterday from "@/components/CountryYesterday";
import Country2Days from "@/components/Country2Days";
export default {
  data() {
    return {
      selectedScreen: "Live"
    };
  },
  components: {
    CountryLive,
    CountryYesterday,
    Country2Days
  },
  methods: {
    selectScreen(newScreen) {
      this.selectedScreen = newScreen;
    }
  }
};
</script>

<style scoped>
.v-data-table /deep/ .sticky-header {
  position: sticky;
  top: 56px;
}
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
  transition: all 0.5s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
