<template>
  <div
    class="h-8vh pt-14 px-5 mb-2 items-center flex justify-between z-50 relative bg-transparent"
  >
    <!-- bg-gray-200 dark:bg-primary -->
    <div>
      <div class="h-9 w-9 rounded-full">
        <img
          src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/02/17/10/homersimpson1702a.jpg?width=1200"
          alt=""
          class="h-9 w-9 object-cover rounded-full"
        />
      </div>
    </div>

    <div>
      <div>
        <p
          class="text-lg text-gray-500 dark:text-white font-bold flex items-center font-boldHeadline"
        >
          LiveSc
          <span class="text-pink">
            <img
              class="h-5 text-pink"
              src="../assets/images/football-outline.svg"
              alt=""
            />
          </span>
          ree
        </p>
      </div>
    </div>

    <div>
      <div
        class="h-8 w-8 rounded-lg bg-white dark:bg-fourth flex items-center justify-center transform cursor-pointer"
      >
        <i
          v-if="isDarkModeActive"
          @click="
            $emit('darkMode'), (this.isDarkModeActive = !this.isDarkModeActive)
          "
          class="fas fa-sun text-xl font-bold text-gray-700 dark:text-white"
        ></i>
        <i
          v-if="!isDarkModeActive"
          @click="
            $emit('darkMode'), (this.isDarkModeActive = !this.isDarkModeActive)
          "
          class="fas fa-moon text-xl font-bold text-gray-700 dark:text-white"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
// import { IonIcon } from '@ionic/vue';
// import { moon, sunny } from 'ionicons/icons';
export default {
  name: 'TopBar',
  components: {
    // IonIcon,
  },
  data() {
    return {
      isDarkModeActive: false,
    };
  },
  methods: {},
};
</script>

<style></style>
