<template>
  <div class="p-2 flex flex-col">
    <!-- <top-bar /> -->
    <!-- FIRST CAROUSEL -->
    <div class="w-full h-20 carousel flex items-center pl-5 overflow-scroll">
    
    <div
        class="carousel-item rounded-xl cursor-pointer h-7 p-2 px-3 bg-white flex text-sm font-bold items-center mx-3 text-black dark:text-white"
        :class="
          this.worldCup == true
            ? 'bg-pink dark:bg-pink text-white'
            : 'dark:bg-fourth'
        "
        @click="
        (this.worldCup = true),
          (this.premierLeague = false),
            (this.laLiga = false),
            (this.ligueOne = false),
            (this.championsLeague = false),
            (this.europaLeague = false),
              (this.europaConferenceLeague = false)
        "
      >
        <p class="flex items-center">
          <img
            class="h-10 "
            src="../assets/images/qatar-wc.png"
          />World Cup 
        </p>
      </div>
      <div
        class="carousel-item rounded-xl cursor-pointer h-7 p-2 px-3 bg-white flex text-sm font-bold items-center mx-3 text-black dark:text-white"
        :class="
          this.premierLeague == true
            ? 'bg-pink dark:bg-pink text-white'
            : 'dark:bg-fourth'
        "
        @click="
          (this.premierLeague = true),
            (this.laLiga = false),
            (this.ligueOne = false),
            (this.championsLeague = false),
            (this.europaLeague = false),
              (this.europaConferenceLeague = false),
               (this.worldCup = false)
        "
      >
        <p class="flex items-center">
          <img
            class="h-8 mr-2"
            src="../assets/images/premier-league-1.svg"
          />Premier League
        </p>
      </div>
      <div
        class="carousel-item rounded-xl h-7 p-2 px-3 bg-white dark:text-white text-sm font-bold flex items-center mx-3 text-black"
        :class="
          this.laLiga === true
            ? 'bg-pink dark:bg-pink  text-white'
            : 'dark:bg-fourth'
        "
        @click="
          (this.laLiga = true),
            (this.premierLeague = false),
            (this.ligueOne = false),
            (this.championsLeague = false),
            (this.europaLeague = false),
              (this.europaConferenceLeague = false),
               (this.worldCup = false)
        "
      >
        <p class="flex items-center">
          <img class="h-8 mr-2" src="../assets/images/la-liga-logo.svg" />La
          Liga
        </p>
      </div>
      <div
        class="carousel-item rounded-xl h-7 p-2 bg-white text-black dark:text-white text-sm font-bold flex items-center mx-3"
        :class="
          this.ligueOne === true
            ? 'bg-pink dark:bg-pink text-white'
            : 'dark:bg-fourth'
        "
        @click="
          (this.ligueOne = true),
            (this.premierLeague = false),
            (this.laLiga = false),
            (this.championsLeague = false),
            (this.europaLeague = false),
              (this.europaConferenceLeague = false),
               (this.worldCup = false)
        "
      >
        <p class="flex items-center">
          <img class="h-8 mr-2" src="../assets/images/ligue-1.svg" />Ligue 1
        </p>
      </div>
      <div
        class="carousel-item rounded-xl h-7 p-2 bg-white text-black dark:text-white text-sm font-bold flex items-center mx-3"
        :class="
          this.championsLeague === true
            ? 'bg-pink dark:bg-pink text-white'
            : 'dark:bg-fourth'
        "
        @click="
          (this.championsLeague = true),
            (this.premierLeague = false),
            (this.laLiga = false),
            (this.ligueOne = false),
            (this.europaLeague = false),
              (this.europaConferenceLeague = false),
               (this.worldCup = false)
        "
      >
        <p class="flex items-center">
          <img
            class="h-8 mr-2"
            src="../assets/images/uefa-champions-league-seeklogo.com.svg"
            alt=""
          />Champions League
        </p>
      </div>
       <div
        class="carousel-item rounded-xl h-7 p-2 bg-white text-black dark:text-white text-sm font-bold flex items-center mx-3"
        :class="
          this.europaConferenceLeague === true
            ? 'bg-pink dark:bg-pink text-white'
            : 'dark:bg-fourth'
        "
        @click="
        (this.europaConferenceLeague = true),
          (this.europaLeague = false),
            (this.premierLeague = false),
            (this.laLiga = false),
            (this.ligueOne = false),
            (this.championsLeague = false),
               (this.worldCup = false)
        "
      >
        <p class="flex items-center">
          <img
            class="h-8 mr-2"
            src="../assets/images/conference-league.png"
            alt=""
          />Europa Conference
        </p>
      </div>
      <div
        class="carousel-item rounded-xl h-7 p-2 bg-white text-black dark:text-white text-sm font-bold flex items-center mx-3"
        :class="
          this.europaLeague === true
            ? 'bg-pink dark:bg-pink text-white'
            : 'dark:bg-fourth'
        "
        @click="
          (this.europaLeague = true),
            (this.premierLeague = false),
            (this.laLiga = false),
            (this.ligueOne = false),
            (this.championsLeague = false),
            (this.europaConferenceLeague = false),
               (this.worldCup = false)
        "
      >
        <p class="flex items-center">
          <img
            class="h-8 mr-2"
            src="../assets/images/europa-league.svg"
            alt=""
          />Europa League
        </p>
      </div>
    </div>
    <!-- FIRST CAROUSEL END -->

    <p class="text-black dark:text-white font-headline font-bold pl-1 text-sm">
      Matches
    </p>
    <!-- SECOND CAROUSEL -->
      <div
        v-if="premierLeague === true"
        class="h-60 p-2 w-full carousel flex items-center overflow-scroll"
      >
        <!-- <router-link
          class="cursor-pointer"
          v-for="(game, index) in games"
          :key="index"
          :to="{ name: 'StatsPage', params: { id: game.fixture.id } }"
        > -->
        <game-card v-for="(game, index) in games" :key="index" :game="game" />
      </div>
        <!-- </router-link> -->

    <div
      v-if="laLiga === true"
      class="h-60 p-2 w-full carousel flex items-center overflow-scroll"
    >
      <game-card
        v-for="(game, index) in laLigaGames"
        :key="index"
        :game="game"
      />
    </div>

    <div
      v-if="ligueOne === true"
      class="h-60 p-2 w-full carousel flex items-center overflow-scroll"
    >
      <game-card
        v-for="(game, index) in ligueOneGames"
        :key="index"
        :game="game"
      />
    </div>

    <div
      v-if="championsLeague === true"
      class="h-60 p-2 w-full carousel flex items-center overflow-scroll"
    >
      <game-card
        v-for="(game, index) in championsLeagueGames"
        :key="index"
        :game="game"
      />
    </div>

    <div
      v-if="europaLeague === true"
      class="h-60 p-2 w-full carousel flex items-center overflow-scroll"
    >
      <game-card
        v-for="(game, index) in europaLeagueGames"
        :key="index"
        :game="game"
      />
    </div>

     <div
      v-if="europaConferenceLeague === true"
      class="h-60 p-2 w-full carousel flex items-center overflow-scroll"
    >
      <game-card
        v-for="(game, index) in europaConferenceLeagueGames"
        :key="index"
        :game="game"
      />
    </div>

       <div
      v-if="worldCup === true && worldCupGames.length > 0"
      class="h-60 p-2 w-full carousel flex items-center overflow-scroll"
    >
      <game-card
        v-for="(game, index) in worldCupGames"
        :key="index"
        :game="game"
      />
    </div>

    <div class="flex justify-between items-center p-2">
      <h2 class="text-black dark:text-white font-headline font-bold text-sm">
        Upcoming
      </h2>
      <p class="font-bold text-sm text-yellow-600 cursor-pointer">Games</p>
    </div>

    <div
      v-if="premierLeague === true"
      class="h-50% w-full carousel-vertical flex items-center p-2 overflow-x-hidden"
    >
      <upcoming-game-card
        v-for="(game, index) in upcomingGames"
        :key="index"
        :game="game"
      />
    </div>

    <div
      v-if="laLiga === true"
      class="h-50% w-full carousel-vertical flex items-center p-2 overflow-x-hidden"
    >
      <upcoming-game-card
        v-for="(game, index) in upcomingLaLigaGames"
        :key="index"
        :game="game"
      />
    </div>

    <div
      v-if="ligueOne === true"
      class="h-50% w-full carousel-vertical flex items-center p-2 overflow-x-hidden"
    >
      <upcoming-game-card
        v-for="(game, index) in upcomingLigueOneGames"
        :key="index"
        :game="game"
      />
    </div>

    <div
      v-if="championsLeague === true"
      class="h-50% w-full carousel-vertical flex items-center p-2 overflow-x-hidden"
    >
      <upcoming-game-card
        v-for="(game, index) in upcomingChampionsLeagueGames"
        :key="index"
        :game="game"
      />
    </div>

    <div
      v-if="europaLeague === true"
      class="h-50% w-full carousel-vertical flex items-center p-2 overflow-x-hidden"
    >
      <upcoming-game-card
        v-for="(game, index) in upcomingEuropaLeagueGames"
        :key="index"
        :game="game"
      />
    </div>

     <div
      v-if="europaConferenceLeague === true"
      class="h-50% w-full carousel-vertical flex items-center p-2 overflow-x-hidden"
    >
      <upcoming-game-card
        v-for="(game, index) in upComingEuropaConferenceLeagueGames"
        :key="index"
        :game="game"
      />
    </div>

     <div
      v-if="worldCup === true"
      class="w-full carousel-vertical flex items-center p-2 overflow-x-hidden" :class="worldCupGames.length > 0 ? 'h-50%' :'h-80%'"
    >
      <upcoming-game-card
        v-for="(game, index) in upcomingWorldCupGames"
        :key="index"
        :game="game"
      />
    </div>
  </div>
</template>

<script>
import GameCard from '../components/HomePage-Components/GameCard.vue';
import UpcomingGameCard from '../components/HomePage-Components/UpcomingGameCard.vue';
// import TopBar from '../components/TopBar.vue';
export default {
  components: { GameCard, UpcomingGameCard },
  data() {
    return {
      games: [],
      upcomingGames: [],
      laLigaGames: [],
      upcomingLaLigaGames: [],
      ligueOneGames: [],
      upcomingLigueOneGames: [],
      championsLeagueGames: [],
      upcomingChampionsLeagueGames: [],
      europaLeagueGames: [],
      upcomingEuropaLeagueGames: [],
      europaConferenceLeagueGames: [],
      upComingEuropaConferenceLeagueGames: [],
      worldCupGames: [],
      upcomingWorldCupGames: [],
      premierLeague: true,
      laLiga: false,
      ligueOne: false,
      championsLeague: false,
      europaConferenceLeague: false,
      europaLeague: false,
      worldCup: false,
    };
  },
  methods: {
    getGamesFromStore() {
      this.games = this.$store.state.gameFixtures;
      // console.log(this.games, 'the games');
    },
    getUpcomingFixturesFromStore() {
      this.upcomingGames = this.$store.state.upcomingFixtures;
      // console.log(this.upcomingGames, 'upcoming prem gamges');
    },
    getLaLigaGamesFromStore() {
      this.laLigaGames = this.$store.state.laLigaGames;
      // console.log(this.laLigaGames, 'laLiga games');
    },
    getUpcomingLaLigaGamesFromStore() {
      this.upcomingLaLigaGames = this.$store.state.upComingLaLigaGames;
    },
    getLigueOneGamesFromStore() {
      this.ligueOneGames = this.$store.state.ligueOneGames;
    },
    getUpcomingLigueOneGamesFromStore() {
      this.upcomingLigueOneGames = this.$store.state.upComingLigueOneGames;
    },
    getChampionsLeagueGames() {
      this.championsLeagueGames = this.$store.state.championsLeagueGames;
    },
    getUpcomingChampionsLeagueGamesFromStore() {
      this.upcomingChampionsLeagueGames =
        this.$store.state.upComingChampionsLeagueGames;
    },
    getEuropaLeagueGames() {
      this.europaLeagueGames = this.$store.state.europaLeagueGames;
    },
    getUpcomingEuropaLeagueGamesFromStore() {
      this.upcomingEuropaLeagueGames =
        this.$store.state.upComingEuropaLeagueGames;
    },
    getEuropaConferenceLeagueGames() {
      this.europaConferenceLeagueGames = this.$store.state.europaConferenceLeagueGames;
    },
    getUpcomingEuropaConferenceLeagueGamesFromStore() {
      this.upComingEuropaConferenceLeagueGames = this.$store.state.upComingEuropaConferenceLeagueGames;
    },
    getWorldCupGames() {
      this.worldCupGames = this.$store.state.worldCupGames
    },
    getUpcomingWorldCupGames() {
      this.upcomingWorldCupGames = this.$store.state.upcomingWorldCupGames
      console.log(this.upcomingWorldCupGames, 'are these filled');
    }
  },
  mounted() {
    this.getGamesFromStore();
    this.getUpcomingFixturesFromStore();
    this.getLaLigaGamesFromStore();
    this.getUpcomingLaLigaGamesFromStore();
    this.getLigueOneGamesFromStore();
    this.getUpcomingLigueOneGamesFromStore();
    this.getChampionsLeagueGames();
    this.getUpcomingChampionsLeagueGamesFromStore();
    this.getEuropaLeagueGames();
    this.getUpcomingEuropaLeagueGamesFromStore();
    this.getEuropaConferenceLeagueGames();
    this.getUpcomingEuropaConferenceLeagueGamesFromStore();
    this.getWorldCupGames()
    this.getUpcomingWorldCupGames();
  },
};
</script>

<style scoped>
/* .game-card {
  position: relative;
  display: flex;
  background-image: linear-gradient(
      to bottom right,
      rgba(1, 1, 1, 0.2),
      rgba(1, 1, 1, 0.4)
    ),
    url(https://wallpaperaccess.com/full/1401210.jpg);
  background-size: cover;
  background-position: center left;
  background-repeat: no-repeat;
} */
</style>
