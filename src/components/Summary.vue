<template>
  <div
    class="w-full h-full overflow-scroll rounded-bl-lg rounded-br-lg p-2 font-headline flex flex-col"
  >
    <div
      class="w-full px-2 flex"
      v-for="(event, index) in matchData[0].events"
      :key="index"
    >
      <div class="flex items-center text-lg" v-if="event.type !== 'subst'">
        <span class="mr-2 text-xs">{{ event.time.elapsed }}'.</span>
        {{ event.player.name }}
        <i v-if="event.type === 'Goal'" class="fa-solid fa-futbol pl-2"></i>
        <p class="text-xs ml-2" v-if="event.detail === 'Penalty'">Pen.</p>
        <div
          class="h-4 w-3 rounded-sm ml-2 bg-red-700"
          v-if="event.detail === 'Red Card'"
        ></div>
        <div
          class="h-4 w-3 ml-2 rounded-sm bg-yellow-400"
          v-if="event.detail === 'Yellow Card'"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['matchData'],
  setup() {
    return {};
  },
  mounted() {
    // console.log(this.matchData, 'the match data');
  },
};
</script>

<style></style>
