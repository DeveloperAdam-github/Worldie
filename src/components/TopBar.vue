<template>
  <div
    class="h-8vh p-3 px-5 items-center flex justify-between z-50 relative bg-transparent"
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
          re
        </p>
      </div>
    </div>

    <div>
      <div
        class="h-8 w-8 rounded-lg bg-white dark:bg-fourth flex items-center justify-center transform cursor-pointer"
      >
        <!-- <ion-icon
          @click="$emit('darkMode')"
          :icon="sunny"
          class="text-xl font-bold text-gray-700 dark:text-white"
        ></ion-icon> -->
        <!-- <ion-icon :icon="moon" class="text-xl font-bold text-gray-700 dark:text-white""></ion-icon> -->
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
  setup() {
    return {
      // sunny,
      // moon,
    };
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
