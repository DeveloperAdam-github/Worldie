<template>
  <div
    class="bg-white m-2 dark:bg-fourth text-black font-headline dark:text-white w-11/12 h-16 rounded-xl font-bold shadow-2xl shadow-black items-center px-3 text-xs carousel-item overflow-hidden"
  >
    <div class="flex items-center w-2/5 justify-between p-1">
      <p class="flex flex-wrap text-xs">
        {{ game.teams.home.name }}
      </p>
      <img class="h-7 pl-1" :src="game.teams.home.logo" alt="" />
    </div>

    <div class="flex flex-col w-1/5 items-center justify-center mx-1">
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
    <!-- .split(' ')[0]  -->
    <div class="flex w-2/5 items-center justify-between p-1">
      <img class="h-7 pr-1" :src="game.teams.away.logo" alt="" />
      <p class="flex flex-wrap text-xs text-right">
        {{ game.teams.away.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['game'],
};
</script>

<style></style>
