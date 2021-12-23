<template>
  <!-- <router-link
      class="cursor-pointer"
      :to="{ name: 'StatsPage', params: { id: game?.fixture.id } }"
    > -->
  <router-link
    :to="{ name: 'StatsPage', params: { id: game?.fixture.id } }"
    class="h-44 mx-4 w-72 rounded-2xl carousel-item p-2 game-card flex flex-col items-center cursor-pointer text-white"
    :class="
      game.league.id === 140
        ? 'bg-la-liga'
        : game.league.id === 61
        ? 'bg-ligue-1'
        : game.league.id === 2
        ? 'bg-champions'
        : game.league.id === 3
        ? 'bg-europa'
        : ''
    "
  >
    <div class="flex flex-col m-2 align-top items-center">
      <p v-if="game.league.id === 39" class="text-sm font-bold">
        Premier League
      </p>
      <p v-if="game.league.id === 140" class="text-sm font-bold">La Liga</p>
      <p class="text-gray-200 text-xs">
        Week {{ game.league.round.split('-')[1] }}
      </p>
    </div>

    <div class="flex justify-between w-full">
      <!-- first team -->
      <div class="1st-team w-1/2 flex flex-col items-center">
        <img class="h-10" :src="game.teams.home.logo" alt="" />
        <p class="text-white font-boldHeadline text-center">
          {{ game.teams.home.name.split(' ')[0] }}
        </p>
        <p class="text-gray-400 font-headline text-sm">Home</p>
      </div>

      <!-- the score/stats -->
      <div class="flex flex-col">
        <div class="flex w-12 justify-between">
          <p class="text-xl font-bold">{{ game.goals.home }}</p>
          <p class="text-xl font-bold">:</p>
          <p class="text-xl font-bold">{{ game.goals.away }}</p>
        </div>
        <div
          class="time-bg rounded-xl flex justify-center border border-red-400"
        >
          <p class="text-white text-xs p-1 flex">
            <small v-if="game?.fixture.status.elapsed == 90">FT</small>
            <small v-else-if="game?.fixture.status.elapsed == null">PP</small>
            <small v-else>{{ game?.fixture.status.elapsed }} mins</small>
          </p>
        </div>
      </div>

      <!-- second team -->
      <div class="2nd-team w-1/2 flex flex-col items-center">
        <img class="h-10" :src="game.teams.away.logo" alt="" />
        <p class="text-white font-boldHeadline text-center">
          {{ game.teams.away.name.split(' ')[0] }}
        </p>
        <p class="text-gray-400 font-headline text-sm">Away</p>
      </div>
    </div>
  </router-link>
  <!-- </router-link> -->
</template>

<script>
export default {
  props: ['game'],
};
</script>

<style>
.time-bg {
  background-image: linear-gradient(
    to bottom right,
    rgba(1, 1, 1, 0.5),
    rgba(1, 1, 1, 0.8)
  );
}

.game-card {
  position: relative;
  display: flex;
  background-image: linear-gradient(
      to bottom right,
      rgba(1, 1, 1, 0.4),
      rgba(1, 1, 1, 0.6)
    ),
    url(https://wallpaperaccess.com/full/1401210.jpg);
  background-size: cover;
  background-position: center left;
  background-repeat: no-repeat;
}
</style>
