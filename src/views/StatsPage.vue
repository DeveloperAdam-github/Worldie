<template>
  <div
    class="p-3 flex flex-col items-center h-full w-full"
    data-theme="worldie"
  >
    <div
      class="
        w-full
        h-52
        stats-card
        -top-16
        z-3
        rounded-2xl
        flex flex-col
        items-center
        pt-16
      "
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
        class="
          bg-white
          dark:bg-fourth
          text-black
          dark:text-white
          h-5/6
          max-h-[48]
          w-10/12
          z-20
          absolute
          rounded-2xl
          shadow-xl shadow-black
          flex flex-col
          p-2
          items-center
        "
      >
        <stats-card :game="matchData" />
      </div>
    </div>
    <div
      data-theme="worldie"
      class="
        w-11/12
        bg-white
        dark:bg-fourth
        text-black
        dark:text-white
        h-96
        rounded-2xl
        shadow-xl shadow-black
        flex flex-col
        items-center
      "
    >
      <div class="w-full p-2 flex justify-between">
        <div
          @click="view = 1"
          class="
            h-10
            m-1
            w-1/3
            rounded-xl
            bg-pink
            flex
            items-center
            justify-center
            font-headline
            text-sm text-white
          "
        >
          Stats
        </div>
        <!-- LINE UP -->
        <div
          @click="this.view = 2"
          class="
            h-10
            m-1
            w-1/3
            rounded-xl
            bg-pink
            flex
            items-center
            justify-center
            font-headline
            text-sm text-white
          "
        >
          Line-Up
        </div>
        <!-- END LINE UP -->
        <div
          @click="this.view = 3"
          class="
            h-10
            m-1
            w-1/3
            rounded-xl
            bg-pink
            flex
            items-center
            justify-center
            font-headline
            text-sm text-white
          "
        >
          Summary
        </div>
      </div>

      <!-- Start of stats -->
      <div
        v-if="view === 1"
        class="
          w-full
          p-3
          pb-4
          h-full
          flex flex-col
          justify-between
          items-center
        "
      >
        <div class="h-5 w-full m-2.5">
          <div class="w-full px-2 flex justify-between">
            <p>{{ matchData[0]?.goals?.home }}</p>
            <p>Goals</p>
            <p>{{ matchData[0]?.goals?.away }}</p>
          </div>
          <div class="w-full h-4 flex">
            <div class="artboard w-full flex">
              <progress
                class="
                  progress progress-warning
                  dark:bg-gray-600
                  w-3/6
                  transform
                  rotate-180
                  mr-1
                "
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
                class="
                  progress progress-accent
                  dark:bg-gray-600
                  w-3/6
                  transform
                  rotate-180
                  mr-1
                "
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
            <p>{{ matchData[0]?.statistics[0]?.statistics[2]?.value ?? 0 }}</p>
            <p>Total shots</p>
            <p>{{ matchData[0]?.statistics[1]?.statistics[2]?.value ?? 0 }}</p>
          </div>
          <div class="w-full h-4 flex">
            <div class="artboard w-full flex">
              <progress
                class="
                  progress progress-warning
                  dark:bg-gray-600
                  w-3/6
                  transform
                  rotate-180
                  mr-1
                "
                :value="matchData[0]?.statistics[0]?.statistics[2]?.value"
                :max="
                  matchData[0]?.statistics[0]?.statistics[2]?.value +
                  matchData[0]?.statistics[1]?.statistics[2]?.value
                "
              ></progress>
              <progress
                class="progress progress-warning dark:bg-gray-600 w-3/6 ml-1"
                :value="matchData[0]?.statistics[1]?.statistics[2]?.value"
                :max="
                  matchData[0]?.statistics[0]?.statistics[2]?.value +
                  matchData[0]?.statistics[1]?.statistics[2]?.value
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
                class="
                  progress progress-warning
                  dark:bg-gray-600
                  w-3/6
                  transform
                  rotate-180
                  mr-1
                "
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
                class="
                  progress progress-warning
                  dark:bg-gray-600
                  w-3/6
                  transform
                  rotate-180
                  mr-1
                "
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
                class="
                  progress progress-warning
                  dark:bg-gray-600
                  w-3/6
                  transform
                  rotate-180
                  mr-1
                "
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
                class="
                  progress progress-warning
                  dark:bg-gray-600
                  w-3/6
                  transform
                  rotate-180
                  mr-1
                "
                :value="
                  Number(
                    matchData[0]?.statistics[0]?.statistics[9]?.value.slice(
                      0,
                      -1
                    )
                  )
                "
                :max="100"
              ></progress>
              <progress
                class="progress progress-warning dark:bg-gray-600 w-3/6 ml-1"
                :value="
                  Number(
                    matchData[0]?.statistics[1]?.statistics[9]?.value.slice(
                      0,
                      -1
                    )
                  )
                "
                :max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
      <!-- Finish of stats -->

      <!-- Start of Line Up -->
      <div
        v-if="view === 2"
        class="h-full w-full relative flex flex-col items-center"
      >
        <div
          class="w-full p-4 lower-card overflow-scroll text-sm font-headline"
        >
          <div
            class="flex flex-col w-full items-center"
            v-if="activeTeam === 1"
          >
            <h3 class="font-boldHeadline flex">
              <img
                :src="matchData[0].lineups[0].coach.photo"
                class="w-6 h-6 mr-2 rounded-full"
                alt=""
              />
              {{ matchData[0].lineups[0].coach.name }}
            </h3>
            <h4 class="font-boldHeadline">
              {{ matchData[0].lineups[0].formation }}
            </h4>
            <div class="w-full h-full p-2 flex flex-col">
              <div
                v-for="(player, index) in matchData[0].lineups[0].startXI"
                :key="index"
                class="flex"
              >
                <!-- <p
                  class="mr-3 h-7 w-7 rounded-full bg-white flex items-center justify-center font-bold text-right"
                >
                  {{ player.player.number }}
                </p> -->
                <div class="flex items-center">
                  <p class="text-xs w-8">{{ player.player.number }}.</p>
                  <p class="">{{ player.player.name }} -</p>
                  <p class="font-boldHeadline ml-1">
                    {{ player.player.pos }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col w-full items-center"
            v-if="activeTeam !== 1"
          >
            <h3 class="font-boldHeadline flex">
              <img
                :src="matchData[0].lineups[1].coach.photo"
                class="w-6 h-6 mr-2 rounded-full"
                alt=""
              />
              {{ matchData[0].lineups[1].coach.name }}
            </h3>
            <h4 class="font-boldHeadline">
              {{ matchData[0].lineups[1].formation }}
            </h4>
            <div class="w-full h-full p-2 flex-col flex">
              <div
                v-for="(player, index) in matchData[0].lineups[1].startXI"
                :key="index"
                class="flex"
              >
                <div class="flex items-center">
                  <p class="text-xs w-8">{{ player.player.number }}.</p>
                  <p class="">{{ player.player.name }} -</p>
                  <p class="font-boldHeadline ml-1">
                    {{ player.player.pos }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex px-auto justify-center absolute bottom-0">
          <div
            class="
              transform
              transition-all
              w-1/2
              flex
              items-center
              justify-center
              border-t-2 border-r
              p-1
              rounded-bl-xl
            "
            :class="activeTeam === 1 ? 'bg-gray-200' : ''"
            @click="toggleActiveTeam"
          >
            <img
              :src="matchData[0].teams.home.logo"
              alt=""
              class="transform transition-all"
              :class="activeTeam !== 1 ? 'h-6 w-6' : 'h-8 w-8'"
            />
          </div>
          <div
            class="
              transform
              transition-all
              w-1/2
              flex
              items-center
              justify-center
              border-t-2 border-l
              p-1
              rounded-br-xl
            "
            :class="activeTeam !== 1 ? 'bg-gray-200' : ''"
            @click="toggleActiveTeam"
          >
            <img
              :src="matchData[0].teams.away.logo"
              alt=""
              class="transform transition-all"
              :class="activeTeam === 1 ? 'h-6 w-6' : 'h-8 w-8'"
            />
          </div>
        </div>
      </div>
      <!-- End of Line Up -->

      <!-- SUMMARY -->
      <Summary v-if="this.view === 3" :matchData="matchData" />
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import StatsCard from "../components/StatsCard.vue";
import { mapGetters } from "vuex";
import Summary from "../components/Summary.vue";
export default {
  components: { StatsCard, Summary },
  data() {
    return {
      matchData: [],
      view: 1,
      activeTeam: 1,
    };
  },
  computed: { ...mapGetters(["singleGameFixture"]) },
  watch: {
    singleGameFixture(newVal) {
      // console.log(`Updating ${oldVal} to ${newVal}`);
      this.matchData = newVal;
      // console.log(this.matchData);
    },
  },
  methods: {
    getFixtureData() {
      const id = this.$route.params.id;
      this.$store.dispatch("getMatchData", id);
    },
    toggleActiveTeam() {
      if (this.activeTeam === 1) {
        this.activeTeam = 2;
      } else if (this.activeTeam === 2) {
        this.activeTeam = 1;
      }
    },
  },
  mounted() {
    this.getFixtureData();
  },
};
</script>

<style>
.lower-card {
  height: 16.5rem;
}
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
