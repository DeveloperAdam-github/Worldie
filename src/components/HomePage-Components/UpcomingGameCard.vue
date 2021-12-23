<template>
  <div
    class="bg-white m-2 dark:bg-fourth text-black font-headline dark:text-white w-10/12 h-16 rounded-xl font-bold shadow-2xl shadow-black items-center px-3 text-xs carousel-item"
  >
    <div class="flex items-center w-1/3 justify-between">
      <p>{{ game.teams.home.name.split(' ')[0] }}</p>
      <img class="h-7 pl-1" :src="game.teams.home.logo" alt="" />
    </div>

    <div class="flex flex-col w-1/3 items-center justify-center">
      <p class="text-yellow-600">
        {{
          new Date(game.fixture.timestamp * 1000)
            .toLocaleTimeString()
            .slice(0, 5)
        }}
      </p>
      <small
        >{{
          new Date(game.fixture.timestamp * 1000).toDateString().split(' ')[2]
        }}<span></span>
        {{
          new Date(game.fixture.timestamp * 1000).toDateString().split(' ')[1]
        }}</small
      >
    </div>

    <div class="flex w-1/3 items-center justify-between">
      <img class="h-7 pr-1" :src="game.teams.away.logo" alt="" />
      <p class="text-xs">{{ game.teams.away.name.split(' ')[0] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['game'],
};
</script>

<style></style>
