import Vuex from 'vuex';
import axios from 'axios';

export default new Vuex.Store({
  state: {
    singleGameFixture: [],
    gameFixtures: [],
    upcomingFixtures: [],
    laLigaGames: [],
    upComingLaLigaGames: [],
    ligueOneGames: [],
    upComingLigueOneGames: [],
    championsLeagueGames: [],
    upComingChampionsLeagueGames: [],
    europaLeagueGames: [],
    upComingEuropaLeagueGames: [],
  },
  mutations: {
    singleGame_fixture(state, game) {
      state.singleGameFixture = game;
    },
    store_fixtures(state, games) {
      state.gameFixtures = games;
    },
    upcoming_fixtures(state, games) {
      state.upcomingFixtures = games;
    },
    store_laliga(state, games) {
      state.laLigaGames = games;
    },
    upcoming_laliga(state, games) {
      state.upComingLaLigaGames = games;
    },
    ligueOne_fixtures(state, games) {
      state.ligueOneGames = games;
    },
    upcoming_ligueOne(state, games) {
      state.upComingLigueOneGames = games;
    },
    champions_fixtures(state, games) {
      state.championsLeagueGames = games;
    },
    upcoming_champions(state, games) {
      state.upComingChampionsLeagueGames = games;
    },
    europa_fixtures(state, games) {
      state.europaLeagueGames = games;
    },
    upcoming_europa(state, games) {
      state.upComingEuropaLeagueGames = games;
    },
  },
  actions: {
    getMatchData({ commit }, id) {
      const options = {
        method: 'GET',
        url: `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${id}`,
        headers: {
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key':
            'c69655757emshbcbfee81712eaf4p1144bajsnbf04355c2f8e',
        },
      };
      axios
        .request(options)
        .then((response) => {
          const game = response.data.response;
          commit('singleGame_fixture', game);
          // console.log(game, 'the single game match data');
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    getGameFixtures({ commit }) {
      const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2022&last=10&league=39',
        headers: {
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key':
            'c69655757emshbcbfee81712eaf4p1144bajsnbf04355c2f8e',
        },
      };

      axios
        .request(options)
        .then((response) => {
          const games = response.data.response;
          commit('store_fixtures', games);
          // console.log(games, 'the prem gam fixtures');
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    getUpcomingFixtures({ commit }) {
      const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: { league: '39', next: '10' },
        headers: {
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key':
            'c69655757emshbcbfee81712eaf4p1144bajsnbf04355c2f8e',
        },
      };

      axios
        .request(options)
        .then((response) => {
          const games = response.data.response;
          // console.log(response.data.response, 'upcoming games');
          commit('upcoming_fixtures', games);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    getLaLigaGames({ commit }) {
      const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2022&last=10&league=140',
        headers: {
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key':
            'c69655757emshbcbfee81712eaf4p1144bajsnbf04355c2f8e',
        },
      };

      axios
        .request(options)
        .then((response) => {
          const games = response.data.response;
          // console.log(response.data.response, 'the la liga games');
          commit('store_laliga', games);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    getUpcomingLaLigaFixtures({ commit }) {
      const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: { league: '140', next: '10' },
        headers: {
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key':
            'c69655757emshbcbfee81712eaf4p1144bajsnbf04355c2f8e',
        },
      };

      axios
        .request(options)
        .then((response) => {
          const games = response.data.response;
          commit('upcoming_laliga', games);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    getLigueOneFixtures({ commit }) {
      const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2022&last=10&league=61',
        headers: {
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key':
            'c69655757emshbcbfee81712eaf4p1144bajsnbf04355c2f8e',
        },
      };

      axios
        .request(options)
        .then((response) => {
          const games = response.data.response;
          commit('ligueOne_fixtures', games);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    getUpcomingLigueOneFixtures({ commit }) {
      const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: { league: '61', next: '10' },
        headers: {
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key':
            'c69655757emshbcbfee81712eaf4p1144bajsnbf04355c2f8e',
        },
      };

      axios
        .request(options)
        .then((response) => {
          const games = response.data.response;
          commit('upcoming_ligueOne', games);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    getChampionsLeagueFixtures({ commit }) {
      const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2022&last=10&league=2',
        headers: {
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key':
            'c69655757emshbcbfee81712eaf4p1144bajsnbf04355c2f8e',
        },
      };

      axios
        .request(options)
        .then((response) => {
          const games = response.data.response;
          commit('champions_fixtures', games);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    getUpcomingChampionsLeagueFixtures({ commit }) {
      const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: { league: '2', next: '10' },
        headers: {
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key':
            'c69655757emshbcbfee81712eaf4p1144bajsnbf04355c2f8e',
        },
      };

      axios
        .request(options)
        .then((response) => {
          const games = response.data.response;
          commit('upcoming_champions', games);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    getEuropaLeagueFixtures({ commit }) {
      const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2022&last=10&league=3',
        headers: {
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key':
            'c69655757emshbcbfee81712eaf4p1144bajsnbf04355c2f8e',
        },
      };

      axios
        .request(options)
        .then((response) => {
          const games = response.data.response;
          commit('europa_fixtures', games);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    getUpcomingEuropaLeagueFixtures({ commit }) {
      const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: { league: '3', next: '10' },
        headers: {
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key':
            'c69655757emshbcbfee81712eaf4p1144bajsnbf04355c2f8e',
        },
      };

      axios
        .request(options)
        .then((response) => {
          const games = response.data.response;
          commit('upcoming_europa', games);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
  getters: {
    singleGameFixture(state) {
      return state.singleGameFixture;
    },
    gameFixtures(state) {
      return state.gameFixtures;
    },
    upcomingFixtures(state) {
      return state.upcomingFixtures;
    },
    laLigaGames(state) {
      return state.laLigaGames;
    },
    getUpcomingLaLigaGames(state) {
      return state.upComingLaLigaGames;
    },
    ligueOneGames(state) {
      return state.ligueOneGames;
    },
    getUpcomingLigueOneGames(state) {
      return state.upComingLigueOneGames;
    },
    championsLeagueGames(state) {
      return state.championsLeagueGames;
    },
    getUpcomingChampionsLeagueGames(state) {
      return state.upComingChampionsLeagueGames;
    },
    europaLeagueGames(state) {
      return state.europaLeagueGames;
    },
    getUpcomingEuropaLeagueGames(state) {
      return state.upComingEuropaLeagueGames;
    },
  },
});
