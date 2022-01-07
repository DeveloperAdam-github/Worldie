<template>
  <div
    class="bottom-0 h-10vh font-headline w-full flex items-center p-2 bg-white text-gray-400 dark:bg-secondary dark:text-white text-xs justify-around lg:text-base"
  >
    <div class="">
      <router-link
        class="flex flex-col items-center w-full m-2 p-1"
        :to="{ name: 'HomePage' }"
      >
        <span class="text-gray-400 dark:text-white">
          <i class="fas fa-home text-xl"></i>
        </span>
        <span class="h-6 text-3xl leading-3 opacity-0">&#183;</span>
      </router-link>
    </div>

    <div class="">
      <router-link
        class="flex flex-col items-center w-full m-2 p-1"
        :to="{ name: 'SchedulePage' }"
      >
        <span class="text-gray-400 dark:text-white">
          <i class="fas fa-calendar-alt text-xl"></i>
        </span>
        <span class="h-6 text-3xl leading-3 opacity-0">&#183;</span>
      </router-link>
    </div>

    <div class="">
      <router-link
        class="flex flex-col items-center w-full m-2 p-1"
        :to="{ name: 'StatsPage' }"
      >
        <span class="text-gray-400 dark:text-white transform -rotate-90">
          <i class="fas fa-chart-bar text-xl"></i>
        </span>
        <span class="h-6 text-3xl leading-3 opacity-0">&#183;</span>
      </router-link>
    </div>

    <!-- <ion-icon name="stats-chart-outline"></ion-icon> -->

    <div class="">
      <button
        class="flex flex-col items-center w-full m-2 p-1"
        @click="countDownTimer"
      >
        <span class="text-gray-400 dark:text-white">
          <i
            class="fas fa-futbol text-xl hover:animate-spin"
            :class="countDown < 15 ? 'text-gray-200' : 'text-gray-400'"
          ></i>
        </span>
        <span class="h-6 text-3xl leading-3 opacity-0">&#183;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar-component',
  components: {},
  data() {
    return {
      countDown: 15,
    };
  },
  methods: {
    getFixtures() {
      this.$store.dispatch('getGameFixtures');
    },
    getLaLigaGames() {
      this.$store.dispatch('getLaLigaGames');
    },
    getLigueOneGames() {
      this.$store.dispatch('getLigueOneFixtures');
    },
    getChampionsLeagueGames() {
      this.$store.dispatch('getChampionsLeagueFixtures');
    },
    getEuropaLeagueGames() {
      this.$store.dispatch('getEuropaLeagueFixtures');
    },
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      } else if (this.countDown == 0) {
        this.countDown = 15;
      }
    },
  },
};
</script>

<style scoped>
/* .router-link {
  width: auto;
  padding: 2px;
  margin: 2px;
  display: flex;
  align-items: center;
} */
.router-link-active {
  color: #793ef9;
  font-weight: bold;

  transition: all 0.3s linear;
}

.router-link-active span {
  opacity: 100;
  color: #793ef9;
}
</style>
