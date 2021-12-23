<template>
  <div :class="darkMode ? 'dark' : 'light'">
    <div
      class="h-screen w-screen bg-gray-200 dark:bg-primary overflow-scroll absolute"
      :class="darkMode ? 'dark' : 'light'"
    >
      <top-bar @darkMode="toggleDarkMode" class="z-50" />
      <router-view
        @darkMode="toggleDarkMode"
        class="h-82vh bg-gray-200 dark:bg-primary z-10"
      />
      <navbar @darkMode="toggleDarkMode" />
    </div>
  </div>
</template>

<script>
// import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import TopBar from './components/TopBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    TopBar, // IonApp,
    // IonRouterOutlet,
  },
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      console.log('clicked');
      this.darkMode = !this.darkMode;
    },
    getFixtures() {
      this.$store.dispatch('getGameFixtures');
    },
    getUpcomingFixtures() {
      this.$store.dispatch('getUpcomingFixtures');
    },
    getLaLigaGames() {
      this.$store.dispatch('getLaLigaGames');
    },
    getUpcomingLaLigaGames() {
      this.$store.dispatch('getUpcomingLaLigaFixtures');
    },
    getLigueOneGames() {
      this.$store.dispatch('getLigueOneFixtures');
    },
    getUpcomingLigueOneGames() {
      this.$store.dispatch('getUpcomingLigueOneFixtures');
    },
    getChampionsLeagueGames() {
      this.$store.dispatch('getChampionsLeagueFixtures');
    },
    getUpcomingChampionsLeagueGames() {
      this.$store.dispatch('getUpcomingChampionsLeagueFixtures');
    },
    getEuropaLeagueGames() {
      this.$store.dispatch('getEuropaLeagueFixtures');
    },
    getUpcomingEuropaLeagueGames() {
      this.$store.dispatch('getUpcomingEuropaLeagueFixtures');
    },
  },
  created() {
    this.getFixtures();
    this.getUpcomingFixtures();
    this.getLaLigaGames();
    this.getUpcomingLaLigaGames();
    this.getLigueOneGames();
    this.getUpcomingLigueOneGames();
    this.getChampionsLeagueGames();
    this.getUpcomingChampionsLeagueGames();
    this.getEuropaLeagueGames();
    this.getUpcomingEuropaLeagueGames();
  },
});
</script>
