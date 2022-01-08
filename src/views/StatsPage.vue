<template>
  <div
    class="p-3 flex flex-col items-center h-full w-full"
    data-theme="worldie"
  >
    <div
      class="w-full h-52 stats-card -top-16 z-3 rounded-2xl flex flex-col items-center pt-16"
      :class="
        matchData[0]?.league.id === 140
          ? 'bg-la-liga'
          : matchData[0]?.league.id === 61
          ? 'bg-ligue-1'
          : matchData[0]?.league.id === 2
          ? 'bg-champions'
          : matchData[0]?.league.id === 3
          ? 'bg-europa'
          : ''
      "
    >
      <div
        class="bg-white dark:bg-fourth text-black dark:text-white h-48 w-10/12 z-20 absolute rounded-2xl shadow-xl shadow-black flex flex-col p-2 items-center"
      >
        <stats-card :game="matchData" />
      </div>
    </div>
    <div
      data-theme="worldie"
      class="w-11/12 bg-white dark:bg-fourth text-black dark:text-white h-96 rounded-2xl shadow-xl shadow-black p-2 flex flex-col items-center"
    >
      <div class="w-full p-2 flex justify-between">
        <div
          class="h-10 m-1 w-1/3 rounded-xl bg-pink flex items-center justify-center font-headline text-sm text-white"
        >
          Stats
        </div>
        <div
          class="h-10 m-1 w-1/3 rounded-xl bg-pink flex items-center justify-center font-headline text-sm text-white"
        >
          Line-Up
        </div>
        <div
          class="h-10 m-1 w-1/3 rounded-xl bg-pink flex items-center justify-center font-headline text-sm text-white"
        >
          Summary
        </div>
      </div>
      <!-- Start of stats -->
      <div class="h-5 w-full m-2.5">
        <div class="w-full px-2 flex justify-between">
          <p>{{ matchData[0]?.goals?.home }}</p>
          <p>Goals</p>
          <p>{{ matchData[0]?.goals?.away }}</p>
        </div>
        <div class="w-full h-4 flex">
          <div class="artboard w-full flex">
            <progress
              class="progress progress-warning dark:bg-gray-600 w-3/6 transform rotate-180 mr-1"
              :value="matchData[0]?.goals?.home"
              :max="matchData[0]?.goals?.home + matchData[0]?.goals?.away"
            ></progress>
            <progress
              class="progress progress-warning dark:bg-gray-600 w-3/6 ml-1"
              :value="matchData[0]?.goals?.away"
              :max="matchData[0]?.goals?.away + matchData[0]?.goals?.home"
            ></progress>
          </div>
          <!-- <div class="h-2 rounded-full mr-1 w-2/6 bg-pink"></div>
          <div
            class="h-2 rounded-full ml-1 w-4/6 bg-accent dark:bg-gray-200"
          ></div> -->
        </div>
      </div>
      <!-- Finish of stats -->
      <!-- Start of stats -->
      <div class="h-5 w-full m-2.5">
        <div class="w-full px-2 flex justify-between">
          <p>
            {{ matchData[0]?.statistics[0]?.statistics[0]?.value ?? 0 }}
          </p>
          <p>Shots on goal</p>
          <p>{{ matchData[0]?.statistics[1]?.statistics[0]?.value ?? 0 }}</p>
        </div>
        <div class="w-full h-4 flex">
          <div class="artboard w-full flex">
            <progress
              class="progress progress-accent dark:bg-gray-600 w-3/6 transform rotate-180 mr-1"
              :value="matchData[0]?.statistics[0]?.statistics[0]?.value"
              :max="
                matchData[0]?.statistics[0]?.statistics[0]?.value +
                matchData[0]?.statistics[1]?.statistics[0]?.value
              "
            ></progress>
            <progress
              class="progress progress-warning dark:bg-gray-600 w-3/6 ml-1"
              :value="matchData[0]?.statistics[1]?.statistics[0]?.value"
              :max="
                matchData[0]?.statistics[0]?.statistics[0]?.value +
                matchData[0]?.statistics[1]?.statistics[0]?.value
              "
            ></progress>
          </div>
        </div>
      </div>
      <!-- Finish of stats -->
      <!-- Start of stats -->
      <div class="h-5 w-full m-2.5">
        <div class="w-full px-2 flex justify-between">
          <p>{{ matchData[0]?.statistics[0]?.statistics[1]?.value ?? 0 }}</p>
          <p>Total shots</p>
          <p>{{ matchData[0]?.statistics[1]?.statistics[1]?.value ?? 0 }}</p>
        </div>
        <div class="w-full h-4 flex">
          <div class="artboard w-full flex">
            <progress
              class="progress progress-warning dark:bg-gray-600 w-3/6 transform rotate-180 mr-1"
              :value="matchData[0]?.statistics[0]?.statistics[1]?.value"
              :max="
                matchData[0]?.statistics[0]?.statistics[1]?.value +
                matchData[0]?.statistics[1]?.statistics[1]?.value
              "
            ></progress>
            <progress
              class="progress progress-warning dark:bg-gray-600 w-3/6 ml-1"
              :value="matchData[0]?.statistics[1]?.statistics[1]?.value"
              :max="
                matchData[0]?.statistics[0]?.statistics[1]?.value +
                matchData[0]?.statistics[1]?.statistics[1]?.value
              "
            ></progress>
          </div>
        </div>
      </div>
      <!-- Finish of stats -->
      <!-- Start of stats -->
      <div class="h-5 w-full m-2.5">
        <div class="w-full px-2 flex justify-between">
          <p>{{ matchData[0]?.statistics[0]?.statistics[10]?.value ?? 0 }}</p>
          <p>Yellow Cards</p>
          <p>{{ matchData[0]?.statistics[1]?.statistics[10]?.value ?? 0 }}</p>
        </div>
        <div class="w-full h-4 flex">
          <div class="artboard w-full flex">
            <progress
              class="progress progress-warning dark:bg-gray-600 w-3/6 transform rotate-180 mr-1"
              :value="matchData[0]?.statistics[0]?.statistics[10]?.value ?? 0"
              :max="
                matchData[0]?.statistics[0]?.statistics[10]?.value +
                matchData[0]?.statistics[1]?.statistics[10]?.value
              "
            ></progress>
            <progress
              class="progress progress-warning dark:bg-gray-600 w-3/6 ml-1"
              :value="matchData[0]?.statistics[1]?.statistics[10]?.value ?? 0"
              :max="
                matchData[0]?.statistics[0]?.statistics[10]?.value +
                matchData[0]?.statistics[1]?.statistics[10]?.value
              "
            ></progress>
          </div>
        </div>
      </div>
      <!-- Finish of stats -->
      <!-- Start of stats -->
      <div class="h-5 w-full m-2.5">
        <div class="w-full px-2 flex justify-between">
          <p>{{ matchData[0]?.statistics[0]?.statistics[11]?.value ?? 0 }}</p>
          <p>Red Cards</p>
          <p>{{ matchData[0]?.statistics[1]?.statistics[11]?.value ?? 0 }}</p>
        </div>
        <div class="w-full h-4 flex">
          <div class="artboard w-full flex">
            <progress
              class="progress progress-warning dark:bg-gray-600 w-3/6 transform rotate-180 mr-1"
              :value="matchData[0]?.statistics[0]?.statistics[11]?.value ?? 0"
              :max="
                matchData[0]?.statistics[0]?.statistics[11]?.value ??
                0 + matchData[0]?.statistics[1]?.statistics[11]?.value ??
                0
              "
            ></progress>
            <progress
              class="progress progress-warning dark:bg-gray-600 w-3/6 ml-1"
              :value="matchData[0]?.statistics[1]?.statistics[11]?.value ?? 0"
              :max="
                matchData[0]?.statistics[0]?.statistics[11]?.value ??
                0 + matchData[0]?.statistics[1]?.statistics[11]?.value ??
                0
              "
            ></progress>
          </div>
        </div>
      </div>
      <!-- Finish of stats -->
      <!-- Start of stats -->
      <div class="h-5 w-full m-2.5">
        <div class="w-full px-2 flex justify-between">
          <p>{{ matchData[0]?.statistics[0]?.statistics[7]?.value }}</p>
          <p>Corner Kicks</p>
          <p>{{ matchData[0]?.statistics[1]?.statistics[7]?.value }}</p>
        </div>
        <div class="w-full h-4 flex">
          <div class="artboard w-full flex">
            <progress
              class="progress progress-warning dark:bg-gray-600 w-3/6 transform rotate-180 mr-1"
              :value="matchData[0]?.statistics[0]?.statistics[7]?.value"
              :max="
                matchData[0]?.statistics[0]?.statistics[7]?.value +
                matchData[0]?.statistics[1]?.statistics[7]?.value
              "
            ></progress>
            <progress
              class="progress progress-warning dark:bg-gray-600 w-3/6 ml-1"
              :value="matchData[0]?.statistics[1]?.statistics[7]?.value"
              :max="
                matchData[0]?.statistics[0]?.statistics[7]?.value +
                matchData[0]?.statistics[1]?.statistics[7]?.value
              "
            ></progress>
          </div>
        </div>
      </div>
      <!-- Finish of stats -->
      <!-- Start of stats -->
      <div class="h-5 w-full m-2.5">
        <div class="w-full px-2 flex justify-between">
          <p>{{ matchData[0]?.statistics[0]?.statistics[9]?.value }}</p>
          <p>Possession</p>
          <p>{{ matchData[0]?.statistics[1]?.statistics[9]?.value }}</p>
        </div>
        <div class="w-full h-4 flex">
          <div class="artboard w-full flex">
            <progress
              class="progress progress-warning dark:bg-gray-600 w-3/6 transform rotate-180 mr-1"
              :value="
                Number(
                  matchData[0]?.statistics[0]?.statistics[9]?.value.slice(0, -1)
                )
              "
              :max="100"
            ></progress>
            <progress
              class="progress progress-warning dark:bg-gray-600 w-3/6 ml-1"
              :value="
                Number(
                  matchData[0]?.statistics[1]?.statistics[9]?.value.slice(0, -1)
                )
              "
              :max="100"
            ></progress>
          </div>
        </div>
      </div>
      <!-- Finish of stats -->
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import StatsCard from '../components/StatsCard.vue';
import { mapGetters } from 'vuex';
export default {
  components: { StatsCard },
  data() {
    return {
      matchData: [],
    };
  },
  computed: { ...mapGetters(['singleGameFixture']) },
  watch: {
    singleGameFixture(newVal, oldVal) {
      console.log(`Updating ${oldVal} to ${newVal}`);
      this.matchData = newVal;
    },
  },
  methods: {
    getFixtureData() {
      const id = this.$route.params.id;
      this.$store.dispatch('getMatchData', id);
    },
  },
  mounted() {
    this.getFixtureData();
  },
  // methods: {
  //   getMatchData() {
  //     const id = this.$route.params.id;
  //     const options = {
  //       method: 'GET',
  //       url: `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${id}`,
  //       headers: {
  //         'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
  //         'x-rapidapi-key':
  //           'c69655757emshbcbfee81712eaf4p1144bajsnbf04355c2f8e',
  //       },
  //     };

  //     axios
  //       .request(options)
  //       .then((response) => {
  //         this.matchData = response.data.response;
  //         console.log(this.matchData);
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       });
  //   },
  // },
  // mounted() {
  //   this.getMatchData();
  // },
};
</script>

<style>
.stats-card {
  position: relative;
  display: flex;
  background-image: linear-gradient(
      to bottom right,
      rgba(1, 1, 1, 0.2),
      rgba(1, 1, 1, 0.6)
    ),
    url(https://wallpaperaccess.com/full/1401210.jpg);
  background-size: cover;
  background-position: center left;
  background-repeat: no-repeat;
}
</style>
