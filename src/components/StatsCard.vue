<template>
  <div class="h-44 w-full flex flex-col items-center">
    <div class="flex flex-col m-2 align-top items-center">
      <p v-if="game[0]?.league?.id === 140">La Liga</p>
      <p v-else-if="game[0]?.league?.id === 61">La Liga</p>
      <p v-else class="text-sm font-bold">Premier League</p>
      <!-- <p class="text-sm font-bold">La Liga</p> -->
      <p class="dark:text-gray-200 text-gray-800 text-xs">
        Week{{ game[0]?.league?.round?.split('-')[1] }}
      </p>
    </div>

    <div class="flex justify-between w-full">
      <!-- first team -->
      <div class="1st-team w-1/2 flex flex-col items-center">
        <img class="h-14" :src="game[0]?.teams?.home?.logo" alt="" />
        <p class="dark:text-white text-black font-boldHeadline text-center">
          {{ game[0]?.teams?.home?.name }}
        </p>
        <p class="text-gray-600 font-headline text-sm">Home</p>
      </div>

      <!-- the score/stats -->
      <div class="flex flex-col">
        <div class="flex w-10 justify-between">
          <p class="text-xl font-bold">{{ game[0]?.goals?.home }}</p>
          <p class="text-xl font-bold">:</p>
          <p class="text-xl font-bold">{{ game[0]?.goals?.away }}</p>
        </div>
        <div
          class="bg-white dark:bg-fourth time-bg rounded-xl flex justify-center border border-red-400"
        >
          <p class="text-white text-sm">
            <!-- <small>FT</small> -->
            <small v-if="game[0]?.fixture?.status?.elapsed == 90">FT</small>
            <small v-else-if="game[0]?.fixture?.status?.elapsed === null"
              >PP</small
            >
            <small v-else>{{ game[0]?.fixture?.status?.elapsed }} '</small>
          </p>
        </div>
      </div>

      <!-- second team -->
      <div class="2nd-team w-1/2 flex flex-col items-center">
        <img class="h-14" :src="game[0]?.teams?.away?.logo" />
        <p class="dark:text-white text-black font-boldHeadline text-center">
          {{ game[0]?.teams?.away?.name }}
        </p>
        <p class="text-gray-600 font-headline text-sm">Away</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['game'],
};
</script>

<style></style>
